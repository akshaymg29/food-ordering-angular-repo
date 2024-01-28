import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService, IAuth } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Output() public sidenavToggle = new EventEmitter();
  LoggedInUser: IAuth =
    {
      token: "",
      user: {
        email: "",
        name: "",
        roles: []
      }
    };
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.LoggedInUser$.subscribe((res) => (this.LoggedInUser = res));
  }
  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }
}
