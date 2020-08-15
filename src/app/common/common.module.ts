import { NgModule } from '@angular/core';
import { CommonModule as AngularCommon } from '@angular/common';
import { AlertComponent } from './components/alert/alert.component';
import { InputComponent } from './components/input/input.component';

@NgModule({
  declarations: [AlertComponent, InputComponent],
  imports: [AngularCommon],
  exports: [AlertComponent, InputComponent],
})
export class CommonModule {}
