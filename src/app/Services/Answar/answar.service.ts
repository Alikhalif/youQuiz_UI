import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Answar } from 'src/app/Model/answar';

@Injectable({
  providedIn: 'root'
})
export class AnswarService {

  constructor(private httpClient:HttpClient) { }

  saveAnswar(inputData: Object): Observable<Answar>{
    return this.httpClient.post<Answar>(`http://localhost:8080/api/answar`,inputData);
  }


}
