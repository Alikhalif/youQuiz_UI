import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AnswarReducer } from './answar.reducer';
import { AnswarEffect } from './answar.effects';

export const ANSWAR_FEATURE_KEY = 'ANSWAR';

@NgModule({
  imports: [
    StoreModule.forFeature(ANSWAR_FEATURE_KEY, AnswarReducer),
    EffectsModule.forFeature([AnswarEffect]),
  ],
})
export class AnswarStateModule {}
