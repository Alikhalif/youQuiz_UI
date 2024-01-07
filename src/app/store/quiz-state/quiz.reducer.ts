import { createReducer, on } from '@ngrx/store';
import * as QuizPageActions from './actions/quiz-page.action';
import * as QuizApiActions from './actions/quiz-api.action';
import { Quiz } from 'src/app/Model/quiz';

export interface QuizState {
  collection: Quiz[];
  selectedQuizID: number | null;
  loading: boolean;
  errors: {};
}

export const initialState: QuizState = {
  collection: [],
  selectedQuizID: null,
  loading: false,
  errors: {},
};

export const QuizReducer = createReducer(
  initialState,
  on(QuizPageActions.enter, (state, action) => ({
    ...state,
    selectedQuizID: null,
    loading: true,
  })),
  on(QuizPageActions.selectQuiz, (state, action) => ({
    ...state,
    selectedQuizID: action.QuizID,
    loading: true,
  })),
  on(QuizPageActions.unselectQuiz, (state, action) => ({
    ...state,
    selectedQuizID: null,
  })),

  on(QuizApiActions.QuizsLoadedSuccessfully, (state, action) => ({
    ...state,
    collection: action.Quizs,
  })),
  on(QuizApiActions.QuizAddedSuccessfully, (state, action) => ({
    collection: createQuiz(state.collection, action.addedQuiz),
    selectedQuizID: null,
    loading: false,
    errors: {},
  })),
  on(QuizApiActions.QuizUpdatedSuccessfully, (state, action) => ({
    collection: updateQuiz(state.collection, action.updatedQuiz),
    selectedQuizID: null,
    loading: false,
    errors: {},
  })),
  on(QuizApiActions.QuizDeletedSuccessfully, (state, action) => ({
    collection: deleteQuiz(state.collection, action.QuizID),
    selectedQuizID: null,
    loading: false,
    errors: {},
  })),
  on(
    QuizApiActions.QuizAddedFailure,
    QuizApiActions.QuizUpdatedFailure,
    QuizApiActions.QuizDeletedFailure,
    QuizApiActions.QuizsLoadedFailure,
    (state, action) => ({
      ...state,
      loading: false,
      errors: action.errors,
    })
  )
);

const createQuiz = (Quizs: Quiz[], newQuiz: Quiz) => [...Quizs, newQuiz];

const updateQuiz = (Quizs: Quiz[], updatedQuiz: Quiz) =>
  Quizs.map((Quiz) =>
    Quiz.id === updatedQuiz.id
      ? Object.assign({}, Quiz, updatedQuiz)
      : Quiz
  );

const deleteQuiz = (Quizs: Quiz[], QuizID: number) =>
  Quizs.filter((Quiz) => Quiz.id != QuizID);
