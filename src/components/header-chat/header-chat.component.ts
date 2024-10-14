import { Component, Input } from '@angular/core';
import { AvatarComponent } from "../avatar/avatar.component";

@Component({
  selector: 'app-header-chat',
  standalone: true,
  imports: [AvatarComponent],
  templateUrl: './header-chat.component.html',
  styleUrl: './header-chat.component.scss'
})
export class HeaderChatComponent {
  @Input() contactName:string = 'contactName'
  @Input() contactNumber:string = 'contactNumber'
}
