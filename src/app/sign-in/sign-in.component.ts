import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  public frm: FormGroup;

  constructor(private fb: FormBuilder) {
/*    this.username = new FormControl();
    this.password = new FormControl(); */

/*    this.frm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
      firstnmae: new FormControl(''),
      lastName: new FormControl(''),
    }); */

    this.frm = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit() {
  }

  public doSignIn() {
    // get username password
    const username = this.frm.get('username').value;
    const password = this.frm.get('password').value;

    // authenticate through API

  }

}
