import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';
import { SetColorDirective } from './set-color.directive';

@NgModule({
  declarations: [WelcomeComponent, SetColorDirective],
  imports: [
    CommonModule
  ],
  exports: [ 
    WelcomeComponent,
    SetColorDirective
  ]
})
export class SharedModule { }
