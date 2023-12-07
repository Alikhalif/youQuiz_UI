import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AssignQuiz } from 'src/app/Model/assign-quiz';

export interface AssignQuizResponse{
  id: number
  score: number;
  result: number;
  reason: string;
  debutDate: Date;
  endDate: Date;
  student_id: number;
  quiz_id: number;
}

@Injectable({
  providedIn: 'root'
})
export class AssignQuizService {

  constructor(private httpClient:HttpClient) { }

  saveAssign(inputData: AssignQuiz[]){
    return this.httpClient.post(`http://localhost:8080/api/assign_quiz`,inputData);
  }

  getAllAssigns(){
    return this.httpClient.get('http://localhost:8080/api/assign_quiz/all');
  }

  getOne(assignId: Number){
    return this.httpClient.get(`http://localhost:8080/api/assign_quiz/${assignId}`);
  }

  updateAssign(inputData: Object, assignId: number){
    return this.httpClient.put(`http://localhost:8080/api/assign_quiz/${assignId}`,inputData);
  }

  deleteAssign(assignId: Number){
    return this.httpClient.delete(`http://localhost:8080/api/assign_quiz/${assignId}`);
  }

}
