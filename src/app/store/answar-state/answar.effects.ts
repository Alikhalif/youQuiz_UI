import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as answarPageActions from './actions/answar-page.action';
import * as answarApiActions from './actions/answar-api.action';
import { concatMap, exhaustMap, map, mergeMap } from 'rxjs';
import { AnswarService } from 'src/app/Services/Answar/answar.service';

@Injectable()
export class AnswarEffect {
  constructor(private actions$: Actions, private answarService: AnswarService) {}

  // loadStudents$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(answarPageActions.enter),
  //     exhaustMap(() =>
  //       this.answarService
  //         .getAllStudent()
  //         .pipe(
  //           map((Students) =>
  //             answarApiActions.AnswarsLoadedSuccessfully({ Students })
  //           )
  //         )
  //     )
  //   )
  // );

  createStudent$ = createEffect(() =>
    this.actions$.pipe(
      ofType(answarPageActions.addAnswar),
      concatMap((action) =>
        this.answarService
          .saveAnswar(action.Answar)
          .pipe(
            map((addedAnswar) =>
              answarApiActions.AnswarAddedSuccessfully({ addedAnswar })
            )
          )
      )
    )
  );

  // updateStudent$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(answarPageActions.updateAnswar),
  //     concatMap((action) =>
  //       this.answarService
  //         .updateStudent(action.Answar, action.AnswarID)
  //         .pipe(
  //           map((updatedStudent) =>
  //             answarApiActions.AnswarUpdatedSuccessfully({ updatedStudent })
  //           )
  //         )
  //     )
  //   )
  // );


  // deleteStudent$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(answarPageActions.deleteAnswar),
  //     mergeMap((action) =>
  //       this.answarService.deleteStudent(action.AnswarID).pipe(
  //         map((response) =>
  //           answarApiActions.AnswarDeletedSuccessfully({
  //             message: response.message,
  //             AnswarID: response.deletedElementIdentifier,
  //           })
  //         )
  //       )
  //     )
  //   )
  // );

}
