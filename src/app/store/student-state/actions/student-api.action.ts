import { createAction, props } from '@ngrx/store';
import { Student } from 'src/app/Model/student';

export const StudentsLoadedSuccessfully = createAction(
  '[Student api] Students loaded successfully',
  props<{ Students: Student[] }>()
);

export const StudentsLoadedFailure = createAction(
  '[Student api] Students loaded failure',
  props<{ errors: {} }>()
);

export const StudentAddedSuccessfully = createAction(
  '[Student api] Student added successfully',
  props<{ addedStudent: Student }>()
);

export const StudentAddedFailure = createAction(
  '[Student api] Student added failure',
  props<{ errors: {} }>()
);

export const StudentUpdatedSuccessfully = createAction(
  '[Student api] Student updated successfully',
  props<{ updatedStudent: Student }>()
);

export const StudentUpdatedFailure = createAction(
  '[Student api] Student updated failure',
  props<{ errors: {} }>()
);

export const StudentDeletedSuccessfully = createAction(
  '[Student api] Student deleted successfully',
  props<{ message: string; StudentID: number }>()
);

export const StudentDeletedFailure = createAction(
  '[Student api] Student deleted failure',
  props<{ errors: {} }>()
);
