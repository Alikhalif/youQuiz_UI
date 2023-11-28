import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


export interface SubjectResponse{
  id: number
  title: string
  parentId: number
}

export interface SubjectResponseType{
  status: Number,
  subjects: SubjectResponse[]
}

export interface SubjectEditResponse{
  status: Number,
  subject: Object
}

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(private httpClient:HttpClient) { }

  saveSubject(inputData: Object){
    return this.httpClient.post(`http://localhost:8080/api/subject`,inputData);
  }

  getAllSubjects(){
    return this.httpClient.get(`http://localhost:8080/api/subject/all`);
  }

  getOne(subjectId: number){
    return this.httpClient.get(`http://localhost:8080/api/subject/${subjectId}`);
  }

  updateSubject(inputData: Object, subjectId: number){
    return this.httpClient.put(`http://localhost:8080/api/subject/${subjectId}`,inputData);
  }

  deleteSubject(subjectId:Number){
    return this.httpClient.delete(`http://localhost:8080/api/subject/${subjectId}`);
  }
}
