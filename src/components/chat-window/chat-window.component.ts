import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat/chat.service';

@Component({
  selector: 'app-chat-window',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chat-window.component.html',
  styleUrl: './chat-window.component.scss'
})
export class ChatWindowComponent implements OnInit{
  messages: { text: string; from: string }[] = [];
  constructor(private chatService: ChatService) {}

  ngOnInit(): void {
    // Inscrevendo-se nas atualizações de mensagens do serviço.
    this.chatService.currentMessages.subscribe((messages) => {
      this.messages = messages;
    });
  }
}
