import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, tap } from 'rxjs';

export interface IUser {
  email: string,
  name: string,
  roles: Array<number>
}

export interface IAuth {
  token: string
  user: IUser
}

export interface ICredentials {
  email: string,
  password: string
}

export interface ILoggedInUser extends IUser {
  password: string,
  _id: string,
}

export interface IUserData {
  userData: ILoggedInUser
}



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenKey = 'authToken';
  getCurrentUser(): IUser {
    const token = localStorage.getItem(this.tokenKey);
    //we can check from browser
    if (token) {
      // Decode the token to get the user data
      const payload = JSON.parse(atob(token.split('.')[1]));
      return {
        name: payload.name,
        email: payload.email,
        roles: payload.roles
      };
    } else {
      return {
        name: "",
        email: "",
        roles: []
      };
    }
    // or make backend call

    // return this._http.get<IUserData>('http://localhost:8000/api/v1/loggedInUser', this.httpOptions)
  }


  // private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  // isLoggedIn$ = this._isLoggedIn$.asObservable();

  private _LoggedInUser$ = new BehaviorSubject<IAuth>({
    token: "",
    user: {
      email: "",
      name: "",
      roles: []
    }
  });
  LoggedInUser$ = this._LoggedInUser$.asObservable();

  constructor(private _http: HttpClient, private router: Router) {
    this._LoggedInUser$.next({ token: localStorage.getItem(this.tokenKey)!, user: this.getCurrentUser() });

  }

  login(data: ICredentials): Observable<IAuth> {
    return this._http.post<IAuth>('http://localhost:8000/api/v1/login', data)
      .pipe(
        tap(
          (response: IAuth) => {
            this._LoggedInUser$.next(response);
            localStorage.setItem(this.tokenKey, response.token);
          }
        )

      )
      ;
  }

  logout() {
    this._LoggedInUser$.next(

      {
        token: "",
        user: {
          email: "",
          name: "",
          roles: []
        }
      }
    );
    localStorage.removeItem(this.tokenKey);
    this.router.navigateByUrl('/');
  }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      "Authorization": "Bearer " + localStorage.getItem(this.tokenKey)!,
    }),
  };
}
