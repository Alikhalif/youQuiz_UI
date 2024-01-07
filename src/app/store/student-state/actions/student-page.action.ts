import { createAction, props } from '@ngrx/store';
import { Student } from 'src/app/Model/student';

export const enter = createAction('[Student page] enter');

export const selectStudent = createAction(
  '[Student page] select Student',
  props<{ StudentID: number }>()
);

export const unselectStudent = createAction('[Student page] unselect Student');

export const addStudent = createAction(
  '[Student page] add Student',
  props<{ Student: Student }>()
);

export const updateStudent = createAction(
  '[Student page] update Student',
  props<{ Student: Student; StudentID: number }>()
);

export const deleteStudent = createAction(
  '[Student page] delete Student',
  props<{ StudentID: number | undefined }>()
);
