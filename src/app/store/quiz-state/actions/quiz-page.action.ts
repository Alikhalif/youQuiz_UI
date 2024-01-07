import { createAction, props } from '@ngrx/store';
import { Quiz } from 'src/app/Model/quiz';

export const enter = createAction('[Quiz page] enter');

export const selectQuiz = createAction(
  '[Quiz page] select Quiz',
  props<{ QuizID: number }>()
);

export const unselectQuiz = createAction('[Quiz page] unselect Quiz');

export const addQuiz = createAction(
  '[Quiz page] add Quiz',
  props<{ Quiz: Quiz }>()
);

export const updateQuiz = createAction(
  '[Quiz page] update Quiz',
  props<{ Quiz: Quiz; QuizID: number }>()
);

export const deleteQuiz = createAction(
  '[Quiz page] delete Quiz',
  props<{ QuizID: number | undefined }>()
);
