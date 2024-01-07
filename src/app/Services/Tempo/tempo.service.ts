import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TempoResponse } from 'src/app/Model/TempoResponse';
import { Tempo } from 'src/app/Model/tempo';

@Injectable({
  providedIn: 'root'
})
export class TempoService {

  constructor( private httpClient:HttpClient) { }

  saveTempo(inputData: Object): Observable<Tempo>{
    return this.httpClient.post<Tempo>(`http://localhost:8080/api/question/temp`,inputData);
  }

  updateTempo(inputData: Object, id_quiz:number, id_question:number): Observable<Tempo>{
    return this.httpClient.put<Tempo>(`http://localhost:8080/api/question/temp/${id_quiz}/${id_question}`,inputData);
  }

  deleteTempo(id_quiz:number, id_question:number | undefined): Observable<{ message: string; deletedElementIdentifier: number }>{
    return this.httpClient
        .delete<{ message: string; deletedElementIdentifier: number }>(`http://localhost:8080/api/question/temp/${id_quiz}/${id_question}`);
  }

  getTempoQuestion(id_quiz:number): Observable<TempoResponse[]>{
    return this.httpClient.get<TempoResponse[]>(`http://localhost:8080/api/question/temp/${id_quiz}`);
  }
}
