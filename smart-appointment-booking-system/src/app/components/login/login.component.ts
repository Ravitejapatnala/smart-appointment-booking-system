import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-login',
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm !: FormGroup;

  constructor(){
    this.loginForm = new FormGroup({
      email : new FormControl(),
      password : new FormControl()
    })
  }

  onLogin(){
    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;

    console.log('Login Email: ',email);
    console.log('Login Password: ', password);

    this.loginForm.reset();
  }
}
