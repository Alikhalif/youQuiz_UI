import { createReducer, on } from '@ngrx/store';
import * as QuestionPageActions from './actions/question-page.action';
import * as QuestionApiActions from './actions/question-api.action';
import { Question } from '../../Model/question';

export interface QuestionState {
  collection: Question[];
  selectedQuestionID: number | null;
  loading: boolean;
  errors: {};
}

export const initialState: QuestionState = {
  collection: [],
  selectedQuestionID: null,
  loading: false,
  errors: {},
};

export const QuestionReducer = createReducer(
  initialState,
  on(QuestionPageActions.enter, (state, action) => ({
    ...state,
    selectedQuestionID: null,
    loading: true,
  })),
  on(QuestionPageActions.selectQuestion, (state, action) => ({
    ...state,
    selectedQuestionID: action.QuestionID,
    loading: true,
  })),
  on(QuestionPageActions.unselectQuestion, (state, action) => ({
    ...state,
    selectedQuestionID: null,
  })),

  on(QuestionApiActions.QuestionsLoadedSuccessfully, (state, action) => ({
    ...state,
    collection: action.Questions,
  })),
  on(QuestionApiActions.QuestionAddedSuccessfully, (state, action) => ({
    collection: createQuestion(state.collection, action.addedQuestion),
    selectedQuestionID: null,
    loading: false,
    errors: {},
  })),
  on(QuestionApiActions.QuestionUpdatedSuccessfully, (state, action) => ({
    collection: updateQuestion(state.collection, action.updatedQuestion),
    selectedQuestionID: null,
    loading: false,
    errors: {},
  })),
  on(QuestionApiActions.QuestionDeletedSuccessfully, (state, action) => ({
    collection: deleteQuestion(state.collection, action.QuestionID),
    selectedQuestionID: null,
    loading: false,
    errors: {},
  })),
  on(
    QuestionApiActions.QuestionAddedFailure,
    QuestionApiActions.QuestionUpdatedFailure,
    QuestionApiActions.QuestionDeletedFailure,
    QuestionApiActions.QuestionsLoadedFailure,
    (state, action) => ({
      ...state,
      loading: false,
      errors: action.errors,
    })
  )
);

const createQuestion = (Questions: Question[], newQuestion: Question) => [...Questions, newQuestion];

const updateQuestion = (Questions: Question[], updatedQuestion: Question) =>
  Questions.map((Question) =>
    Question.id === updatedQuestion.id
      ? Object.assign({}, Question, updatedQuestion)
      : Question
  );

const deleteQuestion = (Questions: Question[], QuestionID: number) =>
  Questions.filter((Question) => Question.id != QuestionID);
