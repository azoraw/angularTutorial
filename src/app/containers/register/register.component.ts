import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/utils/custom-validators';
import { HttpClient } from '@angular/common/http';
import { Observable, timer } from 'rxjs';
import { Api } from 'src/app/utils/api';
import { map, switchMapTo } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: FormGroup

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.form = new FormGroup({
      username: new FormControl(null, [
        Validators.required,
        Validators.email
      ], this.checkUserName.bind(this)),
      birthDate: new FormControl(null, [
        Validators.required,
        CustomValidators.dateShouldBePassed
      ]),
      hobbies: new FormGroup({
        tv: new FormControl(null),
        music: new FormControl(null),
        games: new FormControl(null)
      }, [
          CustomValidators.atLeastOneShouldBeSelected
        ])
    })
  }

  checkUserName(control): Observable<any> {
    return timer(1000).pipe(
      switchMapTo(this.http
        .get(Api.DOES_IT_EXIST, { params: { username: control.value } })
        .pipe(
          map((resp: any) => resp.ok ? null : { se: resp.error })
        ))
    )
  }

}
