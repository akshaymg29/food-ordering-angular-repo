import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user = {
    email: '',
    password: ''
  };
  error = "";

  hide = true;

  constructor(private service: AuthService, private router: Router) { }
  onSubmit() {
    this.service.login(this.user).subscribe({
      next: (val: any) => {
        // alert('Login success');
        this.router.navigateByUrl('/');
      },
      error: (err) => {
        console.log(err);
        this.error = err.error.message;
      }
    })
  }
}
