import { Component, EventEmitter,  Input,  OnInit, Output } from '@angular/core';
import { Book } from '../../../../types/Book';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.css'
})
export class BookCardComponent implements OnInit{
  @Input() book!: Book;
  @Output() bookToPass= new EventEmitter<Book>;

  ngOnInit(): void {
    this.bookToPass.emit(this.book);

  }




}
