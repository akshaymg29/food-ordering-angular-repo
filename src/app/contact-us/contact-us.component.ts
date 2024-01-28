import { Component } from '@angular/core';
import { ContactusService } from '../services/contactus.service';
import { MatDialog } from '@angular/material/dialog';
import { TemplateRef } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})

export class ContactUsComponent {

  user = {
    name: '',
    email: '',
    message: ''
  };

  constructor(private service: ContactusService, public dialog: MatDialog){}
  
  onSubmit(ref: TemplateRef<any>, contactForm:NgForm) {
    this.service.contactUs(this.user).subscribe(() => {
      console.log('Contact form submitted successfully');
      this.dialog.open(ref);
      contactForm.form.reset();
    });
  }
}