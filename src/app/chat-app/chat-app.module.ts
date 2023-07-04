import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat/chat.component';
import { BrowserModule } from '@angular/platform-browser';
import { MessageBoxComponent } from './message-box/message-box.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ChatComponent,
    MessageBoxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  bootstrap:[ChatComponent]
})
export class ChatAppModule { }
