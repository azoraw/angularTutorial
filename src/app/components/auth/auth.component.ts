import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(public authService: AuthService) {

   }

  ngOnInit() {
  }

  logIn(form: NgForm) {
    if (form.valid) {
      this.authService.logIn(form.value)
    } else {
      console.warn('form invalid')
    }
  }

  logOut() {
    this.authService.logOut();
  }

}
