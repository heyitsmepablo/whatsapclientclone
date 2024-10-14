import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../components/header/header.component';
import { SearchBarComponent } from "../components/search-bar/search-bar.component";
import { ChatListComponent } from "../components/chat-list/chat-list.component";
import { ChatItemComponent } from "../components/chat-item/chat-item.component";
import { HeaderChatComponent } from "../components/header-chat/header-chat.component";
import { AvatarComponent } from "../components/avatar/avatar.component";
import { ChatTextingBarComponent } from "../components/chat-texting-bar/chat-texting-bar.component";
import { ChatWindowComponent } from "../components/chat-window/chat-window.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SearchBarComponent, ChatListComponent, ChatItemComponent, HeaderChatComponent, AvatarComponent, ChatTextingBarComponent, ChatWindowComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'whatsapp-client';
}
