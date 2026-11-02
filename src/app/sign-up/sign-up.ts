import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../models/user';

@Component({
  imports: [FormsModule],
  selector: 'app-sign-up',
  styleUrl: './sign-up.css',
  templateUrl: './sign-up.html',
})
export class SignUp {
  user = new User();
  onSubmit() : void {
    console.log(this.user);
  }
}
