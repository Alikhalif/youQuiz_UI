import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private httpClient: HttpClient) { }

  saveQuiz(data: Object){
    return this.httpClient.post(`http://localhost:8080/api/quiz`,data);
  }

  getAllQuizzes(){
    return this.httpClient.get('http://localhost:8080/api/quiz/all');
  }

  getOne(quizId: Number){
    return this.httpClient.get(`http://localhost:8080/api/quiz/${quizId}`);
  }

  updateLevel(data: Object, quizId: number){
    return this.httpClient.put(`http://localhost:8080/api/quiz/${quizId}`,data);
  }

  deleteLevel(quizId:Number){
    return this.httpClient.delete(`http://localhost:8080/api/quiz/${quizId}`);
  }
}
