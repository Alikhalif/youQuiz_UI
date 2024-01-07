import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as studentPageActions from './actions/student-page.action';
import * as StudentApiActions from './actions/student-api.action';
import { concatMap, exhaustMap, map, mergeMap } from 'rxjs';
import { StudentService } from 'src/app/Services/Student/student.service';

@Injectable()
export class StudentEffect {
  constructor(private actions$: Actions, private studentService: StudentService) {}

  loadStudents$ = createEffect(() =>
    this.actions$.pipe(
      ofType(studentPageActions.enter),
      exhaustMap(() =>
        this.studentService
          .getAllStudent()
          .pipe(
            map((Students) =>
              StudentApiActions.StudentsLoadedSuccessfully({ Students })
            )
          )
      )
    )
  );

  createStudent$ = createEffect(() =>
    this.actions$.pipe(
      ofType(studentPageActions.addStudent),
      concatMap((action) =>
        this.studentService
          .saveStudent(action.Student)
          .pipe(
            map((addedStudent) =>
              StudentApiActions.StudentAddedSuccessfully({ addedStudent })
            )
          )
      )
    )
  );

  updateStudent$ = createEffect(() =>
    this.actions$.pipe(
      ofType(studentPageActions.updateStudent),
      concatMap((action) =>
        this.studentService
          .updateStudent(action.Student, action.StudentID)
          .pipe(
            map((updatedStudent) =>
              StudentApiActions.StudentUpdatedSuccessfully({ updatedStudent })
            )
          )
      )
    )
  );

  deleteStudent$ = createEffect(() =>
    this.actions$.pipe(
      ofType(studentPageActions.deleteStudent),
      mergeMap((action) =>
        this.studentService.deleteStudent(action.StudentID).pipe(
          map((response) =>
            StudentApiActions.StudentDeletedSuccessfully({
              message: response.message,
              StudentID: response.deletedElementIdentifier,
            })
          )
        )
      )
    )
  );
}
