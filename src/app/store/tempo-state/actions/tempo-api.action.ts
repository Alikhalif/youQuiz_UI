import { createAction, props } from '@ngrx/store';
import { Tempo } from 'src/app/Model/tempo';

export const TemposLoadedSuccessfully = createAction(
  '[Tempo api] Tempos loaded successfully',
  props<{ Tempos: Tempo[] }>()
);

export const TemposLoadedFailure = createAction(
  '[Tempo api] Tempos loaded failure',
  props<{ errors: {} }>()
);

export const TempoAddedSuccessfully = createAction(
  '[Tempo api] Tempo added successfully',
  props<{ addedTempo: Tempo }>()
);

export const TempoAddedFailure = createAction(
  '[Tempo api] Tempo added failure',
  props<{ errors: {} }>()
);

export const TempoUpdatedSuccessfully = createAction(
  '[Tempo api] Tempo updated successfully',
  props<{ updatedTempo: Tempo }>()
);

export const TempoUpdatedFailure = createAction(
  '[Tempo api] Tempo updated failure',
  props<{ errors: {} }>()
);

export const TempoDeletedSuccessfully = createAction(
  '[Tempo api] Tempo deleted successfully',
  props<{ message: string; TempoQuizID: number; TempoQuestionID: number }>()
);

export const TempoDeletedFailure = createAction(
  '[Tempo api] Tempo deleted failure',
  props<{ errors: {} }>()
);
