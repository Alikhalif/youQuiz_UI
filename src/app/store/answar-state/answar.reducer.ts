import { createReducer, on } from '@ngrx/store';
import * as AnswarPageActions from './actions/answar-page.action';
import * as AnswarApiActions from './actions/answar-api.action';
import { Answar } from '../../Model/answar';

export interface AnswarState {
  collection: Answar[];
  selectedAnswarID: number | null;
  loading: boolean;
  errors: {};
}

export const initialState: AnswarState = {
  collection: [],
  selectedAnswarID: null,
  loading: false,
  errors: {},
};

export const AnswarReducer = createReducer(
  initialState,
  on(AnswarPageActions.enter, (state, action) => ({
    ...state,
    selectedAnswarID: null,
    loading: true,
  })),
  on(AnswarPageActions.selectAnswar, (state, action) => ({
    ...state,
    selectedAnswarID: action.AnswarID,
    loading: true,
  })),
  on(AnswarPageActions.unselectAnswar, (state, action) => ({
    ...state,
    selectedAnswarID: null,
  })),

  on(AnswarApiActions.AnswarsLoadedSuccessfully, (state, action) => ({
    ...state,
    collection: action.Answars,
  })),
  on(AnswarApiActions.AnswarAddedSuccessfully, (state, action) => ({
    collection: createAnswar(state.collection, action.addedAnswar),
    selectedAnswarID: null,
    loading: false,
    errors: {},
  })),
  on(AnswarApiActions.AnswarUpdatedSuccessfully, (state, action) => ({
    collection: updateAnswar(state.collection, action.updatedAnswar),
    selectedAnswarID: null,
    loading: false,
    errors: {},
  })),
  on(AnswarApiActions.AnswarDeletedSuccessfully, (state, action) => ({
    collection: deleteAnswar(state.collection, action.AnswarID),
    selectedAnswarID: null,
    loading: false,
    errors: {},
  })),
  on(
    AnswarApiActions.AnswarAddedFailure,
    AnswarApiActions.AnswarUpdatedFailure,
    AnswarApiActions.AnswarDeletedFailure,
    AnswarApiActions.AnswarsLoadedFailure,
    (state, action) => ({
      ...state,
      loading: false,
      errors: action.errors,
    })
  )
);

const createAnswar = (answars: Answar[], newAnswar: Answar) => [...answars, newAnswar];

const updateAnswar = (answars: Answar[], updatedAnswar: Answar) =>
  answars.map((answar) =>
    answar.id === updatedAnswar.id
      ? Object.assign({}, answar, updatedAnswar)
      : answar
  );

const deleteAnswar = (answars: Answar[], AnswarID: number) =>
  answars.filter((answar) => answar.id != AnswarID);
