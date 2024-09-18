import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CookieComponent } from './components/cookie/cookie.component';
import { LowComponent } from './components/low/low.component';
import { LegalComponent } from './components/legal/legal.component';
import { PrivecyRoutingModule } from './privecy-routing.module';



@NgModule({
  declarations: [
    CookieComponent,
    LowComponent,
    LegalComponent
  ],
  imports: [
    CommonModule,
    PrivecyRoutingModule
  ],
  exports: [
    CookieComponent,
    LowComponent,
    LegalComponent
  ]
})
export class PrivecyModule { }
