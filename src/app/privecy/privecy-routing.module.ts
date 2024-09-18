import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import {  RouterModule, Routes } from "@angular/router";
import { LowComponent } from "./components/low/low.component";
import { LegalComponent } from "./components/legal/legal.component";
import { CookieComponent } from "./components/cookie/cookie.component";


const rotes: Routes = [
  {path: 'low', component: LowComponent},
  {path: 'legal', component: LegalComponent},
  {path: 'cookie', component: CookieComponent},
]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(rotes)
  ],
  exports: [RouterModule]
})
export class PrivecyRoutingModule { }



