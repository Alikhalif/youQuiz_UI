import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  constructor(private httpClient: HttpClient) { }

  saveMedia(inputData: Object){
    return this.httpClient.post(`http://localhost:8080/api/media`,inputData);
  }

  getMediaByQuestion(mediaId: number){
    return this.httpClient.get(`http://localhost:8080/api/media/question/${mediaId}`);
  }

  getOne(mediaId: number){
    return this.httpClient.get(`http://localhost:8080/api/media/${mediaId}`);
  }

  updateMedia(inputData: Object, mediaId: number){
    return this.httpClient.put(`http://localhost:8080/api/media/${mediaId}`,inputData);
  }

  deleteQuestion(mediaId:Number){
    return this.httpClient.delete(`http://localhost:8080/api/media/${mediaId}`);
  }
}
