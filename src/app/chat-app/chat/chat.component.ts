import { ServiceExample } from './../../app.module';
import { Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { ChatService } from '../chat-service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent {


  isOpened: boolean =  false
  messages : string []  = []
  messageToSend:string = ''

  constructor(private chatService:ChatService) {
    this.messages = this.chatService.getMessages()
  }

  open() {
    this.isOpened = !this.isOpened
  }

  sendMessage() {
   if(this.messageToSend  && this.messageToSend != ''){
    this.chatService.send(this.messageToSend)
     this.messageToSend = ''
   }
  }
}
