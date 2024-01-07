import { createAction, props } from '@ngrx/store';
import { Question } from 'src/app/Model/question';

export const enter = createAction('[Question page] enter');

export const selectQuestion = createAction(
  '[Question page] select Question',
  props<{ QuestionID: number }>()
);

export const unselectQuestion = createAction('[Question page] unselect Question');

export const addQuestion = createAction(
  '[Question page] add Question',
  props<{ Question: Question }>()
);

export const updateQuestion = createAction(
  '[Question page] update Question',
  props<{ Question: Question; QuestionID: number }>()
);

export const deleteQuestion = createAction(
  '[Question page] delete Question',
  props<{ QuestionID: number | undefined }>()
);
