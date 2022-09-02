import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth/auth.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-auth-view',
  templateUrl: './auth-view.component.html',
  styleUrls: ['./auth-view.component.css']
})
export class AuthViewComponent implements OnInit {

  authForm: FormGroup;

  errorMsg: string;

  constructor(private authService: AuthService, private router: Router,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.authForm = this.formBuilder.group({
      'email': ['', [Validators.email, Validators.required]],
      'password': ['', [Validators.required]]
    });

  }

  /**
   * Method called when the user click on the signin button
   */
  onSubmitSignIn() {

    const email = this.authForm.value.email;
    const password = this.authForm.value.password;

    this.authService.signIn(email, password)
      .then(() =>
      {
        this.router.navigate(['books']);
      })
      .catch((err) => {
        this.errorMsg = err;
      });

  }

}
