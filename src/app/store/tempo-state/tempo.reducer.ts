import { createReducer, on } from '@ngrx/store';
import * as TempoPageActions from './actions/tempo-page.action';
import * as TempoApiActions from './actions/tempo-api.action';
import { Tempo } from '../../Model/tempo';

export interface TempoState {
  collection: Tempo[];
  selectedTempoID: number | null;
  loading: boolean;
  errors: {};
}

export const initialState: TempoState = {
  collection: [],
  selectedTempoID: null,
  loading: false,
  errors: {},
};

export const TempoReducer = createReducer(
  initialState,
  on(TempoPageActions.enter, (state, action) => ({
    ...state,
    selectedTempoID: null,
    loading: true,
  })),
  on(TempoPageActions.selectTempo, (state, action) => ({
    ...state,
    selectedTempoID: action.TempoID,
    loading: true,
  })),
  on(TempoPageActions.unselectTempo, (state, action) => ({
    ...state,
    selectedTempoID: null,
  })),

  on(TempoApiActions.TemposLoadedSuccessfully, (state, action) => ({
    ...state,
    collection: action.Tempos,
  })),
  on(TempoApiActions.TempoAddedSuccessfully, (state, action) => ({
    collection: createTempo(state.collection, action.addedTempo),
    selectedTempoID: null,
    loading: false,
    errors: {},
  })),
  on(TempoApiActions.TempoUpdatedSuccessfully, (state, action) => ({
    collection: updateTempo(state.collection, action.updatedTempo),
    selectedTempoID: null,
    loading: false,
    errors: {},
  })),
  on(TempoApiActions.TempoDeletedSuccessfully, (state, action) => ({
    collection: deleteTempo(state.collection, action.TempoQuestionID, action.TempoQuizID),
    selectedTempoID: null,
    loading: false,
    errors: {},
  })),
  on(
    TempoApiActions.TempoAddedFailure,
    TempoApiActions.TempoUpdatedFailure,
    TempoApiActions.TempoDeletedFailure,
    TempoApiActions.TemposLoadedFailure,
    (state, action) => ({
      ...state,
      loading: false,
      errors: action.errors,
    })
  )
);

const createTempo = (Tempos: Tempo[], newTempo: Tempo) => [...Tempos, newTempo];

const updateTempo = (Tempos: Tempo[], updatedTempo: Tempo) =>
  Tempos.map((Tempo) =>
    Tempo.quiz_id === updatedTempo.quiz_id &&
    Tempo.question_id === updatedTempo.question_id
      ? Object.assign({}, Tempo, updatedTempo)
      : Tempo
  );

const deleteTempo = (Tempos: Tempo[], TempoQuizID: number, TempoQuestionID: number) =>
  Tempos.filter((Tempo) => Tempo.question_id != TempoQuestionID && Tempo.quiz_id != TempoQuizID);
