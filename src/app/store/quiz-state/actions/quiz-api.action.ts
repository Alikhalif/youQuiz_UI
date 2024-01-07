import { createAction, props } from '@ngrx/store';
import { Quiz } from 'src/app/Model/quiz';

export const QuizsLoadedSuccessfully = createAction(
  '[Quiz api] Quizs loaded successfully',
  props<{ Quizs: Quiz[] }>()
);

export const QuizsLoadedFailure = createAction(
  '[Quiz api] Quizs loaded failure',
  props<{ errors: {} }>()
);

export const QuizAddedSuccessfully = createAction(
  '[Quiz api] Quiz added successfully',
  props<{ addedQuiz: Quiz }>()
);

export const QuizAddedFailure = createAction(
  '[Quiz api] Quiz added failure',
  props<{ errors: {} }>()
);

export const QuizUpdatedSuccessfully = createAction(
  '[Quiz api] Quiz updated successfully',
  props<{ updatedQuiz: Quiz }>()
);

export const QuizUpdatedFailure = createAction(
  '[Quiz api] Quiz updated failure',
  props<{ errors: {} }>()
);

export const QuizDeletedSuccessfully = createAction(
  '[Quiz api] Quiz deleted successfully',
  props<{ message: string; QuizID: number }>()
);

export const QuizDeletedFailure = createAction(
  '[Quiz api] Quiz deleted failure',
  props<{ errors: {} }>()
);
