import { createAction, props } from '@ngrx/store';
import { Tempo } from 'src/app/Model/tempo';

export const enter = createAction('[Tempo page] enter');

export const selectTempo = createAction(
  '[Tempo page] select Tempo',
  props<{ TempoID: number }>()
);

export const unselectTempo = createAction('[Tempo page] unselect Tempo');

export const addTempo = createAction(
  '[Tempo page] add Tempo',
  props<{ Tempo: Tempo }>()
);

export const updateTempo = createAction(
  '[Tempo page] update Tempo',
  props<{ Tempo: Tempo; id_quiz:number, id_question:number }>()
);

export const deleteTempo = createAction(
  '[Tempo page] delete Tempo',
  props<{ id_quiz:number; id_question:number | undefined }>()
);
