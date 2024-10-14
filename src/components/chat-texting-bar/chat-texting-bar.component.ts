import { Component } from '@angular/core';
import { ChatService } from '../../services/chat/chat.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat-texting-bar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './chat-texting-bar.component.html',
  styleUrl: './chat-texting-bar.component.scss'
})
export class ChatTextingBarComponent {
  newMessageText:string = ''

  constructor(private chatService: ChatService) {}

  sendMessage() {
    if (this.newMessageText.trim()){
      this.chatService.addMessage({text:this.newMessageText,from:'sent'})
      this.newMessageText = ''
    }
  }
}
