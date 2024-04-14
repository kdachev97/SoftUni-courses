import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';
import { IUser } from '../../interfaces/user';
import { switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent implements OnInit {

  user!: IUser | null;
  currentUserId!: number;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    this.route.params.pipe(
      tap(({id}) => {
        this.user = null
        this.currentUserId = Number(id)
      }),
      switchMap(({ id }) => this.userService.loadUser(id))
    ).subscribe((user) => {
      this.user = user;
    });
  }
}
