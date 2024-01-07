import { createReducer, on } from '@ngrx/store';
import * as StudentPageActions from './actions/student-page.action';
import * as StudentApiActions from './actions/student-api.action';
import { Student } from '../../Model/student';

export interface StudentState {
  collection: Student[];
  selectedStudentID: number | null;
  loading: boolean;
  errors: {};
}

export const initialState: StudentState = {
  collection: [],
  selectedStudentID: null,
  loading: false,
  errors: {},
};

export const StudentReducer = createReducer(
  initialState,
  on(StudentPageActions.enter, (state, action) => ({
    ...state,
    selectedStudentID: null,
    loading: true,
  })),
  on(StudentPageActions.selectStudent, (state, action) => ({
    ...state,
    selectedStudentID: action.StudentID,
    loading: true,
  })),
  on(StudentPageActions.unselectStudent, (state, action) => ({
    ...state,
    selectedStudentID: null,
  })),
  
  on(StudentApiActions.StudentsLoadedSuccessfully, (state, action) => ({
    ...state,
    collection: action.Students,
  })),
  on(StudentApiActions.StudentAddedSuccessfully, (state, action) => ({
    collection: createStudent(state.collection, action.addedStudent),
    selectedStudentID: null,
    loading: false,
    errors: {},
  })),
  on(StudentApiActions.StudentUpdatedSuccessfully, (state, action) => ({
    collection: updateStudent(state.collection, action.updatedStudent),
    selectedStudentID: null,
    loading: false,
    errors: {},
  })),
  on(StudentApiActions.StudentDeletedSuccessfully, (state, action) => ({
    collection: deleteStudent(state.collection, action.StudentID),
    selectedStudentID: null,
    loading: false,
    errors: {},
  })),
  on(
    StudentApiActions.StudentAddedFailure,
    StudentApiActions.StudentUpdatedFailure,
    StudentApiActions.StudentDeletedFailure,
    StudentApiActions.StudentsLoadedFailure,
    (state, action) => ({
      ...state,
      loading: false,
      errors: action.errors,
    })
  )
);

const createStudent = (Students: Student[], newStudent: Student) => [...Students, newStudent];

const updateStudent = (Students: Student[], updatedStudent: Student) =>
  Students.map((Student) =>
    Student.id === updatedStudent.id
      ? Object.assign({}, Student, updatedStudent)
      : Student
  );

const deleteStudent = (Students: Student[], StudentID: number) =>
  Students.filter((Student) => Student.id != StudentID);
