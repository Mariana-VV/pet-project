import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookCardComponent } from './components/book-card/book-card.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { CardDetailsComponent } from './components/card-details/card-details.component';
import { specialGuardGuard } from '../guards/special-guard.guard';



@NgModule({
  declarations: [
    BookCardComponent,
    BookListComponent,
    CardDetailsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BookCardComponent,
    BookListComponent,
    CardDetailsComponent

  ],

  providers:[specialGuardGuard]
})
export class RootModule { }
