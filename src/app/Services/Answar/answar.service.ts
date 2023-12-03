import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnswarService {

  constructor(private httpClient:HttpClient) { }

  saveAnswar(inputData: Object){
    return this.httpClient.post(`http://localhost:8080/api/answar`,inputData);
  }

  
}
