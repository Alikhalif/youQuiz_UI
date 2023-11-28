import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


export interface LevelResponse{
  id: number
  maxScore: number
  minScore: number
  description: string
}

export interface LevelResponseType{
  status: Number,
  students: LevelResponse[]
}

export interface LevelEditResponse{
  status: Number,
  student: Object
}

@Injectable({
  providedIn: 'root'
})

export class LevelService {

  constructor(private httpClient:HttpClient) { }

  saveLevel(inputData: Object){
    return this.httpClient.post(`http://localhost:8080/api/level`,inputData);
  }

  getAllLevel(){
    return this.httpClient.get('http://localhost:8080/api/level/all');
  }

  getOne(levelId: Number){
    return this.httpClient.get(`http://localhost:8080/api/level/${levelId}`);
  }

  updateLevel(inputData: Object, levelId: number){
    return this.httpClient.put(`http://localhost:8080/api/level/${levelId}`,inputData);
  }

  deleteLevel(levelId:Number){
    return this.httpClient.delete(`http://localhost:8080/api/level/${levelId}`);
  }

}
