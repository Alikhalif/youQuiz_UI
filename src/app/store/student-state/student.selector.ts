import { createFeatureSelector, createSelector } from '@ngrx/store';
import { STUDENT_FEATURE_KEY } from './student.state.module';
import {  StudentState } from './student.reducer';

export const selectStudentState =
  createFeatureSelector<StudentState>(STUDENT_FEATURE_KEY);

/**
 * Local selectors
 */

const getAllStudens = (state: StudentState) => state.collection;
const getSelectedStudentID = (state: StudentState) => state.selectedStudentID;
const getErrors = (state: StudentState) => state.errors;
const getLoadingState = (state: StudentState) => state.loading;

const getSelectedStudent = createSelector(
  getAllStudens,
  getSelectedStudentID,
  (students, selectedStudentID) =>
    students.find((student) => student.id === selectedStudentID) ?? null
);

/**
 * Global selectors
 */
export const selectStudents = createSelector(selectStudentState, getAllStudens);

export const selectSelectedStudentCode = createSelector(
  selectStudentState,
  getSelectedStudentID
);

export const selectSelectedStudent = createSelector(
  selectStudentState,
  getSelectedStudent
);

export const selectLoadingState = createSelector(
  selectStudentState,
  getLoadingState
);

export const selectErrorState = createSelector(selectStudentState, getErrors);
