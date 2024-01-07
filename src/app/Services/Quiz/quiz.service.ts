import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Quiz } from 'src/app/Model/quiz';

export interface QuizResponse{
  id: number,
  score: number,
  showAnswers: boolean,
  showFinalResults: boolean,
  chanceNum: number,
  remark: string,
  trainerId: number
}

@Injectable({
  providedIn: 'root'
})
export class QuizService {



  constructor(private httpClient: HttpClient) { }

  saveQuiz(data: Object) : Observable<Quiz>{
    return this.httpClient.post<Quiz>(`http://localhost:8080/api/quiz`,data);
  }

  getAllQuizzes(): Observable<QuizResponse[]>{
    return this.httpClient.get<QuizResponse[]>('http://localhost:8080/api/quiz/all');
  }

  getOne(quizId: Number){
    return this.httpClient.get(`http://localhost:8080/api/quiz/${quizId}`);
  }

  updateQuiz(data: Object, quizId: number): Observable<Quiz>{
    return this.httpClient.put<Quiz>(`http://localhost:8080/api/quiz/${quizId}`,data);
  }

  deleteQuiz(quizId:Number | undefined): Observable<{ message: string; deletedElementIdentifier: number }>{
    return this.httpClient
    .delete<{ message: string; deletedElementIdentifier: number }>(`http://localhost:8080/api/quiz/${quizId}`);
  }
}
