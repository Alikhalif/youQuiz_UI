import { createFeatureSelector, createSelector } from '@ngrx/store';
import { QUESTION_FEATURE_KEY } from './question.state.module';
import { QuestionState } from './question.reducer';

export const selectQuestionState =
  createFeatureSelector<QuestionState>(QUESTION_FEATURE_KEY);

/**
 * Local selectors
 */

const getAllQuestions = (state: QuestionState) => state.collection;
const getSelectedQuestionID = (state: QuestionState) => state.selectedQuestionID;
const getErrors = (state: QuestionState) => state.errors;
const getLoadingState = (state: QuestionState) => state.loading;

const getSelectedQuetion = createSelector(
  getAllQuestions,
  getSelectedQuestionID,
  (questions, selectedQuestionID) =>
    questions.find((quetion) => quetion.id === selectedQuestionID) ?? null
);

/**
 * Global selectors
 */
export const selectQuestion = createSelector(selectQuestionState, getAllQuestions);

export const selectSelectedQuestionCode = createSelector(
  selectQuestionState,
  getSelectedQuestionID
);

export const selectSelectedQuetion = createSelector(
  selectQuestionState,
  getSelectedQuetion
);

export const selectLoadingState = createSelector(
  selectQuestionState,
  getLoadingState
);

export const selectErrorState = createSelector(selectQuestionState, getErrors);
