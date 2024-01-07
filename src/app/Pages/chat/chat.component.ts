import { Component, OnInit } from '@angular/core';
import { ChatMessage } from 'src/app/Model/chatMessage';
import { ChatService } from 'src/app/Services/Chat/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit{

  constructor(private chatService:ChatService){}


  ngOnInit(): void {
    this.chatService.joinRoom("A")
  }

  sendMessage(){
    const chatMessage = {
      message : 'hola',
      user:'1'
    } as ChatMessage
    this.chatService.sendMessage("A", chatMessage);
  }
}
