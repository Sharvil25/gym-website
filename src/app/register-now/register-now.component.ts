import { Component } from '@angular/core';

@Component({
  selector: 'app-register-now',
  templateUrl: './register-now.component.html',
  styleUrls: ['./register-now.component.css'],
})
export class RegisterNowComponent {
  form = {
    fname: '',
    Email: '',
    lname: '',
    mblno: '',
  };

  integerRegex = /^\d+$/;

  emailRegex =
    "/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/";
  Email: any;

  registerFn() {
    console.log(this.form);
  }
}
