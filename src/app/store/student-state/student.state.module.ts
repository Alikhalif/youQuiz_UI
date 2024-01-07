import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StudentEffect } from './student.effects';
import { StudentReducer } from './student.reducer';

export const STUDENT_FEATURE_KEY = 'STUDENT';

@NgModule({
  imports: [
    StoreModule.forFeature(STUDENT_FEATURE_KEY, StudentReducer),
    EffectsModule.forFeature([StudentEffect]),
  ],
})
export class StudentStateModule {}
