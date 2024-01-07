import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TempoEffect } from './tempo.effects';
import { TempoReducer } from './tempo.reducer';

export const TEMPO_FEATURE_KEY = 'TEMPO';

@NgModule({
  imports: [
    StoreModule.forFeature(TEMPO_FEATURE_KEY, TempoReducer),
    EffectsModule.forFeature([TempoEffect]),
  ],
})
export class TempoStateModule {}
