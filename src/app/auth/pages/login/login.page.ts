import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  authForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  onSubmit(): void{
    console.log('AutoForm: ', this.authForm.value);
  }

  ngOnInit(): void {
    this.createForm();
  }

  private createForm(): void{
    this.authForm = this.fb.group({
      email:['', [Validators.required, Validators.email]],
      password:['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get email(): FormControl{
    return this.authForm.get('email') as FormControl;
  }

  get password(): FormControl{
    return this.authForm.get('password') as FormControl;
  }
}
