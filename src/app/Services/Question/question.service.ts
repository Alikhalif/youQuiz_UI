import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from 'src/app/Model/question';
import { ValidationResponse } from 'src/app/Model/validationResponse';

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

  saveQuestion(inputData: Object): Observable<Question>{
    return this.httpClient.post<Question>(`http://localhost:8080/api/question`,inputData);
  }

  getQuestion() : Observable<QuestionResponse[]>{
    return this.httpClient.get<QuestionResponse[]>(`http://localhost:8080/api/question/all`);
  }

  getOne(questionId: number){
    return this.httpClient.get(`http://localhost:8080/api/question/${questionId}`);
  }

  updateQuestion(inputData: Object, questionId: number): Observable<Question>{
    return this.httpClient.put<Question>(`http://localhost:8080/api/question/${questionId}`,inputData);
  }

  deleteQuestion(questionId:Number | undefined): Observable<{ message: string; deletedElementIdentifier: number }>{
    return this.httpClient
        .delete<{ message: string; deletedElementIdentifier: number }>(`http://localhost:8080/api/question/${questionId}`);
  }

  getValidation(questionId:number): Observable<ValidationResponse[]>{
    return this.httpClient.get<ValidationResponse[]>(`http://localhost:8080/api/question/answar/${questionId}`);
  }
}
