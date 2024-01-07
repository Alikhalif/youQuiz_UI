import { createFeatureSelector, createSelector } from '@ngrx/store';
import { QuizState } from './quiz.reducer';
import { QUIZ_FEATURE_KEY } from './quiz.state.module';


export const selectQuizState =
  createFeatureSelector<QuizState>(QUIZ_FEATURE_KEY);

/**
 * Local selectors
 */

const getAllQuizs = (state: QuizState) => state.collection;
const getSelectedQuizID = (state: QuizState) => state.selectedQuizID;
const getErrors = (state: QuizState) => state.errors;
const getLoadingState = (state: QuizState) => state.loading;

const getSelectedQuiz = createSelector(
  getAllQuizs,
  getSelectedQuizID,
  (quizs, selectedQuizID) =>
    quizs.find((quiz) => quiz.id === selectedQuizID) ?? null
);

/**
 * Global selectors
 */
export const selectQuizs = createSelector(selectQuizState, getAllQuizs);

export const selectSelectedQuizCode = createSelector(
  selectQuizState,
  getSelectedQuizID
);

export const selectSelectedQuiz = createSelector(
  selectQuizState,
  getSelectedQuiz
);

export const selectLoadingState = createSelector(
  selectQuizState,
  getLoadingState
);

export const selectErrorState = createSelector(selectQuizState, getErrors);
