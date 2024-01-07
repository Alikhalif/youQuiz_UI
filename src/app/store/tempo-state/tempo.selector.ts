import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TEMPO_FEATURE_KEY } from './tempo.state.module';
import {  TempoState } from './tempo.reducer';

export const selectTempoState =
  createFeatureSelector<TempoState>(TEMPO_FEATURE_KEY);

/**
 * Local selectors
 */

const getAllStudens = (state: TempoState) => state.collection;
const getSelectedTempoID = (state: TempoState) => state.selectedTempoID;
const getErrors = (state: TempoState) => state.errors;
const getLoadingState = (state: TempoState) => state.loading;

const getSelectedTempo = createSelector(
  getAllStudens,
  getSelectedTempoID,
  (Tempos, selectedTempoID) =>
    Tempos.find((Tempo) => Tempo.quiz_id === selectedTempoID) ?? null
);

/**
 * Global selectors
 */
export const selectTempos = createSelector(selectTempoState, getAllStudens);

export const selectSelectedTempoCode = createSelector(
  selectTempoState,
  getSelectedTempoID
);

export const selectSelectedTempo = createSelector(
  selectTempoState,
  getSelectedTempo
);

export const selectLoadingState = createSelector(
  selectTempoState,
  getLoadingState
);

export const selectErrorState = createSelector(selectTempoState, getErrors);
