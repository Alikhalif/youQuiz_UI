import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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

  saveStudent(inputData: Object){
    return this.httpClient.post(`http://localhost:8080/api/student`,inputData);
  }

  getAllStudent(){
    return this.httpClient.get('http://localhost:8080/api/student');
  }


}
