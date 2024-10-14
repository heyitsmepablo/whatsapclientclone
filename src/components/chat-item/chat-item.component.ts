import { Component, Input } from '@angular/core';
import { AvatarComponent } from "../avatar/avatar.component";

@Component({
  selector: 'app-chat-item',
  standalone: true,
  imports: [AvatarComponent],
  templateUrl: './chat-item.component.html',
  styleUrl: './chat-item.component.scss'
})
export class ChatItemComponent {
  @Input() contactName:string = 'contactName'
  @Input() lastMessage:string = 'lastMessage'

}
