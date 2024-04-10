import { Component, Inject } from '@angular/core';
import { API_URL_TOKEN } from './providers';
import { UserService } from './user.service';
import { IUser } from './interfaces/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  users: IUser[] | null = null;

  title = 'my-app';

  changeTitleHandler(newTitle: string) {
    this.title = newTitle;
  }

  data = {
    name: 'TEST'
  }

  constructor(userService: UserService) {
    userService.loadUsers().subscribe(u => { this.users = u; })
  }
}
