import { Component } from '@angular/core';
import { PaymentService } from '../services/payment.service';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { TemplateRef } from '@angular/core';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {

  paymentformGroup: FormGroup;
  yearList: Array<string> | undefined;
  mnthList: Array<string> | undefined;
  paymentStatus: any
  constructor(private service: PaymentService, private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router, private snackBar: MatSnackBar, private dialog: MatDialog,) {

    // this.paymentformGroup = new FormGroup(
    //   {
    //     $key: new FormControl(null),
    //     cardNumber : new FormControl(''),
    //     cardHolder: new FormControl(''),
    //     expireMonth: new FormControl(''),
    //     expireYear: new FormControl(''),
    //     amount: new FormControl(''),
    //     cvv: new FormControl(''),

    //   }
    // );
    const data = history.state;
    this.yearList = service.getYearList();
    this.mnthList = service.getMnthList();
    this.paymentformGroup = this.formBuilder.group(
      {
        $key: [null],
        cardNumber: ['', [Validators.required, Validators.minLength(13), Validators.maxLength(16)]],
        cardHolder: ['', Validators.required],
        expireMonth: ['', Validators.required],
        expireYear: ['', Validators.required],
        amount: [data.amount, Validators.required],
        cvv: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]]

      }
    );
    this.paymentStatus = { paymentId: "", message: "" };
  }

  ngOnInit() {

    // const data = this.route?.snapshot?.paramMap.get('data');
    // console.log("state-------->", data);
    // const data = history.state;
    // console.log(data);
    // this.paymentformGroup.value.amount = "142"
    // this.paymentformGroup.value.amount = data.amount;
    // console.log("amount----->", state.amount)

  }

  onFormSubmit(ref: TemplateRef<any>) {
    if (this.paymentformGroup.valid) {
      console.log(this.paymentformGroup.value);
      this.service.postPayment(this.paymentformGroup.value).subscribe({
        next: (val: any) => {

          // alert(val.paymentId + val.message)
          // this.snackBar.open(`${val.message} Payment Id: ${val.paymentId} `, 'Close', { duration: 3000 });
          // this.snackBar.open("hello world", 'Close', { duration: 3000 });
          // this.snackBar.open("hello world");
          // console.log('User registered successfully');
          this.paymentStatus.paymentId = val.paymentId;
          this.paymentStatus.message = val.message;

          this.dialog.open(ref);
          this.router.navigate(['/']);

        },
        error: (err) => {
          console.log(err);

        }
      })
    }
  }
}
