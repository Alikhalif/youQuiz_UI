import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as TempoPageActions from './actions/tempo-page.action';
import * as TempoApiActions from './actions/tempo-api.action';
import { concatMap, exhaustMap, map, mergeMap } from 'rxjs';
import { TempoService } from 'src/app/Services/Tempo/tempo.service';

@Injectable()
export class TempoEffect {
  constructor(private actions$: Actions, private TempoService: TempoService) {}

  // loadTempos$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(TempoPageActions.enter),
  //     exhaustMap(() =>
  //       this.TempoService
  //         .getAllTempo()
  //         .pipe(
  //           map((Tempos) =>
  //             TempoApiActions.TemposLoadedSuccessfully({ Tempos })
  //           )
  //         )
  //     )
  //   )
  // );

  createTempo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TempoPageActions.addTempo),
      concatMap((action) =>
        this.TempoService
          .saveTempo(action.Tempo)
          .pipe(
            map((addedTempo) =>
              TempoApiActions.TempoAddedSuccessfully({ addedTempo })
            )
          )
      )
    )
  );

  updateTempo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TempoPageActions.updateTempo),
      concatMap((action) =>
        this.TempoService
          .updateTempo(action.Tempo, action.id_quiz, action.id_question)
          .pipe(
            map((updatedTempo) =>
              TempoApiActions.TempoUpdatedSuccessfully({ updatedTempo })
            )
          )
      )
    )
  );

  deleteTempo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TempoPageActions.deleteTempo),
      mergeMap((action) =>
        this.TempoService.deleteTempo(action.id_quiz, action.id_question).pipe(
          map((response) =>
            TempoApiActions.TempoDeletedSuccessfully({
              message: response.message,
              TempoQuizID: response.deletedElementIdentifier,
              TempoQuestionID:response.deletedElementIdentifier,
            })
          )
        )
      )
    )
  );
}
