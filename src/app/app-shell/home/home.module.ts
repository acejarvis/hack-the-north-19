import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlankComponent } from './blank.component';
import { HomeRoutingModule } from './home-routing.module';


@NgModule({
  declarations: [
    BlankComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
