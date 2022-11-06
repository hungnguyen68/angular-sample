import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface IUser {
  id?: number;
  userName: string;
  name: string;
  password: string;
}

@Injectable()
export class AuthService {
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private postsUrl = 'https://60dff0ba6b689e001788c858.mockapi.io/users/';
  users: IUser[];

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  constructor(
    private router: Router,
    private http: HttpClient
  ) { 
    this.getUsers().subscribe(users => { this.users = users }); //get list users
  }

  login(user: IUser) {
    if (user.userName !== '' && user.password !== '') {
      this.loggedIn.next(true);
      
      const user = this.getRandomUser();
      if (user != null) {
        this.setLocalDbUserInfo(user);
      }
      this.router.navigate(['/home']);
    }
  }

  logout() {
    this.loggedIn.next(false);
    this.removeLocalDbUserInfo();
    this.router.navigate(['/login']);
  }

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.postsUrl);
  }

  getRandomUser() {
    let randomIndex = Math.floor(Math.random() * this.users.length);
    return this.users[randomIndex];
  }

  setLocalDbUserInfo(user: IUser) {
    localStorage.setItem("userId", user.id.toString());
    localStorage.setItem("name", user.name);
  }

  removeLocalDbUserInfo() {
    localStorage.removeItem("userId");
    localStorage.removeItem("name");
  }

  getLocalDbUserInfo(): IUser {
    let user = {} as IUser;
    const userId = localStorage.getItem("userId");
    const name = localStorage.getItem("name");

    if (userId !== null) {
      user.id = Number(userId);
      user.name = name;
    }

    return user;
  }
}