import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


export interface TrainerResponse{
  id: number
  firstName: string
  lastName: string
  birthDate: Date
  address: string
  speciality: string
}

export interface TrainerResponseType{
  status: Number,
  trainers: TrainerResponse[]
}

export interface TrainerEditResponse{
  status: Number,
  trainer: Object
}

@Injectable({
  providedIn: 'root'
})
export class TrainerService {

  constructor( private httpClient:HttpClient) { }

  saveTrainer(inputData: Object){
    return this.httpClient.post(`http://localhost:8080/api/trainer`,inputData);
  }

  getTrainer(){
    return this.httpClient.get(`http://localhost:8080/api/trainer/all`);
  }

  getOne(trainerId: number){
    return this.httpClient.get<TrainerEditResponse>(`http://localhost:8080/api/trainer/${trainerId}`);
  }

  updateTrainer(inputData: Object, trainerId: number){
    return this.httpClient.put(`http://localhost:8080/api/trainer/${trainerId}`,inputData);
  }

  deleteTrainer(trainerId:Number){
    return this.httpClient.delete(`http://localhost:8080/api/trainer/${trainerId}`);
  }
}
