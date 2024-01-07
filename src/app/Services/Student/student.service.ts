import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from 'src/app/Model/student';

export interface StudentResponse{
  id: number
  firstName: string
  lastName: string
  birthDate: Date
  address: string
  dateInscription: Date
}

export interface StudentResponseType{
  status: Number,
  students: StudentResponse[]
}

export interface StudentEditResponse{
  status: Number,
  student: Object
}


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient:HttpClient) { }

  saveStudent(inputData: Object) : Observable<Student>{
    return this.httpClient.post<Student>(`http://localhost:8080/api/student`,inputData);
  }

  getAllStudent(): Observable<Student[]>{
    return this.httpClient.
            get<Student[]>('http://localhost:8080/api/student');
  }

  getOne(studentId: Number){
    return this.httpClient.get(`http://localhost:8080/api/student/${studentId}`);
  }

  updateStudent(inputData: Object, studentId: number) : Observable<Student>{
    return this.httpClient.put<Student>(`http://localhost:8080/api/student/${studentId}`,inputData);
  }

  deleteStudent(
    studentId:Number | undefined
    ): Observable<{ message: string; deletedElementIdentifier: number }> {
    return this.httpClient
    .delete<{ message: string; deletedElementIdentifier: number }>(`http://localhost:8080/api/student/${studentId}`);
  }

}
