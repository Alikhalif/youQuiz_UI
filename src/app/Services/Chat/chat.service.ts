import { Injectable } from '@angular/core';
// import * as SockJS from 'sockjs-client';
// import * as SockJS from 'sockjs-client';
import { Stomp } from '@Stomp/stompjs';
// import * as SockJS from 'sockjs-client';
import { ChatMessage } from 'src/app/Model/chatMessage';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private stompClient: any;

  constructor() {
    this.initConnectionSocket();
  }


  initConnectionSocket(){
    const url = 'http://localhost:8080/chat';
    // const socket = new SockJS('http://localhost:8080/chat');
    // this.stompClient = Stomp.over(socket)
  }

  joinRoom(roomId: string){
    this.stompClient.connect({}, ()=> {
      this.stompClient.subscribe(`/topic/${roomId}`, (messages: any) =>{
        const messageContent = JSON.parse(messages.body);
        console.log(messageContent);

      })
    })
  }

  sendMessage(roomId: string, chatMessage: ChatMessage){
    this.stompClient.send(`/app/chat/${roomId}`, {}, JSON.stringify(chatMessage));
  }
}
