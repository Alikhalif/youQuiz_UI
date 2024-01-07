import { createAction, props } from '@ngrx/store';
import { Answar } from 'src/app/Model/answar';

export const enter = createAction('[Answar page] enter');

export const selectAnswar = createAction(
  '[Answar page] select Answar',
  props<{ AnswarID: number }>()
);

export const unselectAnswar = createAction('[Answar page] unselect Answar');

export const addAnswar = createAction(
  '[Answar page] add Answar',
  props<{ Answar: Answar }>()
);

export const updateAnswar = createAction(
  '[Answar page] update Answar',
  props<{ Answar: Answar; AnswarID: number }>()
);

export const deleteAnswar = createAction(
  '[Answar page] delete Answar',
  props<{ AnswarID: number | undefined }>()
);
