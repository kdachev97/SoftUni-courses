import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { IUser } from '../shared/interfaces';
import { tap } from 'rxjs/operators';
import { AuthService } from '../core/auth.service';
import { Store } from '@ngrx/store';
import { IRootState } from '../+store';
import { updateUser } from '../+store/actions';

const apiUrl = environment.apiUrl;

@Injectable()
export class UserService {

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private store: Store<IRootState>
  ) { }

  getCurrentUserProfile(): Observable<any> {
    return this.http.get(`/users/profile`).pipe(
      tap(((user: any) => this.store.dispatch(updateUser({ user }))))
    );
  }

  updateProfile(data: any): Observable<IUser> {
    return this.http.put(`/users/profile`, data).pipe(
      tap(((user: any) => this.store.dispatch(updateUser({ user }))))

    );
  }
}
// isLogged = false;

// constructor(private storage: StorageService) {
//   this.isLogged = this.storage.getItem('isLogged');
// }

// login(data: any): Observable<any> {
//   this.isLogged = true;
//   this.storage.setItem('isLogged', true);
//   return of(data).pipe(delay(3000));
// }

// logout(): Observable<any> {
//   this.isLogged = false;
//   this.storage.setItem('isLogged', false);
//   return of(null).pipe(delay(3000));
// }
// }