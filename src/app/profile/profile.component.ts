import { Component, OnInit } from '@angular/core';
import { AuthService, IUser } from '../auth/auth.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: IUser = null;
  constructor(private authService: AuthService, private location: Location) { }

  ngOnInit() {
    this.user = this.authService.getLocalDbUserInfo();
  }

  back(): void{
    this.location.back();
  }

}
