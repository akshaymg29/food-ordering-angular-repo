import { Component } from '@angular/core';
import { SignUpService } from '../services/signup.service';
import { MatDialog } from '@angular/material/dialog';
import { TemplateRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  user = {
    name: '',
    email: '',
    password: ''
  };

  hide = true;
  
  constructor(private service: SignUpService, public dialog: MatDialog, private router: Router){}
  
  onSubmit(ref: TemplateRef<any>) {
    this.service.register(this.user).subscribe(() => {
      console.log('User registered successfully');
      this.dialog.open(ref);
      this.router.navigateByUrl('/login');      
    });
  }
}
