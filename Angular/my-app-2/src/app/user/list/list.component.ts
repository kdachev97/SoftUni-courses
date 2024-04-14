import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { IUser } from '../../interfaces/user';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit {

  userList: IUser[] | null = null;
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.loadUsers().subscribe(userList => {
      this.userList = userList;
    })
  }
}
