import { createAction, props } from '@ngrx/store';
import { Question } from 'src/app/Model/question';

export const QuestionsLoadedSuccessfully = createAction(
  '[Question api] Questions loaded successfully',
  props<{ Questions: Question[] }>()
);

export const QuestionsLoadedFailure = createAction(
  '[Question api] Questions loaded failure',
  props<{ errors: {} }>()
);

export const QuestionAddedSuccessfully = createAction(
  '[Question api] Question added successfully',
  props<{ addedQuestion: Question }>()
);

export const QuestionAddedFailure = createAction(
  '[Question api] Question added failure',
  props<{ errors: {} }>()
);

export const QuestionUpdatedSuccessfully = createAction(
  '[Question api] Question updated successfully',
  props<{ updatedQuestion: Question }>()
);

export const QuestionUpdatedFailure = createAction(
  '[Question api] Question updated failure',
  props<{ errors: {} }>()
);

export const QuestionDeletedSuccessfully = createAction(
  '[Question api] Question deleted successfully',
  props<{ message: string; QuestionID: number }>()
);

export const QuestionDeletedFailure = createAction(
  '[Question api] Question deleted failure',
  props<{ errors: {} }>()
);
