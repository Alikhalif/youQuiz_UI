import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ANSWAR_FEATURE_KEY } from './answar.state.module';
import { AnswarState } from './answar.reducer';

export const selectAnswarState =
  createFeatureSelector<AnswarState>(ANSWAR_FEATURE_KEY);

/**
 * Local selectors
 */

const getAllAnswars = (state: AnswarState) => state.collection;
const getSelectedAnswarID = (state: AnswarState) => state.selectedAnswarID;
const getErrors = (state: AnswarState) => state.errors;
const getLoadingState = (state: AnswarState) => state.loading;

const getSelectedAnswar = createSelector(
  getAllAnswars,
  getSelectedAnswarID,
  (answars, selectedAnswarID) =>
    answars.find((answar) => answar.id === selectedAnswarID) ?? null
);

/**
 * Global selectors
 */
export const selectAnswars = createSelector(selectAnswarState, getAllAnswars);

export const selectSelectedAnswarCode = createSelector(
  selectAnswarState,
  getSelectedAnswarID
);

export const selectSelectedAnswar = createSelector(
  selectAnswarState,
  getSelectedAnswar
);

export const selectLoadingState = createSelector(
  selectAnswarState,
  getLoadingState
);

export const selectErrorState = createSelector(selectAnswarState, getErrors);
