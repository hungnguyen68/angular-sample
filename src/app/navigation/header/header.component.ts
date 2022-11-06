import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../../auth/auth.service'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit{

  userIsAuthenticated = false;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.isLoggedIn.subscribe(isAuthenticated => {this.userIsAuthenticated = isAuthenticated;})
  }

  onLogout() {
    this.authService.logout();
  }

}
