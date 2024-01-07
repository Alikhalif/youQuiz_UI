import { createAction, props } from '@ngrx/store';
import { Answar } from 'src/app/Model/answar';

export const AnswarsLoadedSuccessfully = createAction(
  '[Answar api] Answars loaded successfully',
  props<{ Answars: Answar[] }>()
);

export const AnswarsLoadedFailure = createAction(
  '[Answar api] Answars loaded failure',
  props<{ errors: {} }>()
);

export const AnswarAddedSuccessfully = createAction(
  '[Answar api] Answar added successfully',
  props<{ addedAnswar: Answar }>()
);

export const AnswarAddedFailure = createAction(
  '[Answar api] Answar added failure',
  props<{ errors: {} }>()
);

export const AnswarUpdatedSuccessfully = createAction(
  '[Answar api] Answar updated successfully',
  props<{ updatedAnswar: Answar }>()
);

export const AnswarUpdatedFailure = createAction(
  '[Answar api] Answar updated failure',
  props<{ errors: {} }>()
);

export const AnswarDeletedSuccessfully = createAction(
  '[Answar api] Answar deleted successfully',
  props<{ message: string; AnswarID: number }>()
);

export const AnswarDeletedFailure = createAction(
  '[Answar api] Answar deleted failure',
  props<{ errors: {} }>()
);
