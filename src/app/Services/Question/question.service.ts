import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface QuestionResponse{
  id: number
  questionText: string
  type: string
  totalScore: Date
  subjectId: string
  levelId: string
}

export interface QuestionResponseType{
  status: Number,
  questions: QuestionResponse[]
}

export interface QuestionEditResponse{
  status: Number,
  question: Object
}



@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor( private httpClient:HttpClient) { }

  saveQuestion(inputData: Object){
    return this.httpClient.post(`http://localhost:8080/api/question`,inputData);
  }

  getQuestion(){
    return this.httpClient.get(`http://localhost:8080/api/question/all`);
  }

  getOne(questionId: number){
    return this.httpClient.get(`http://localhost:8080/api/question/${questionId}`);
  }

  updateQuestion(inputData: Object, questionId: number){
    return this.httpClient.put(`http://localhost:8080/api/question/${questionId}`,inputData);
  }

  deleteQuestion(questionId:Number){
    return this.httpClient.delete(`http://localhost:8080/api/question/${questionId}`);
  }
}
