import { Component } from '@angular/core';
import { Book } from '../../../../types/Book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent {
  books: Book[] = [
    { id: 1,
      title: 'Terminator',
      price: 500,
      discontPrice: 350,
      ingUrl: '../assets/images/b1.jpg',
    },
    { id: 2,
      title: 'About cat',
      price: 600,
      discontPrice: 450,
      ingUrl: '../assets/images/b2.jpg',
    },

    { id: 3,
      title: 'Matrix',
      price: 400,
      discontPrice: 350,
      ingUrl: '../assets/images/b3.jpg',
    },

    { id: 4,
      title: 'Eneida',
      price: 700,
      discontPrice: 650,
      ingUrl: '../assets/images/b4.jpg',
    },

    { id: 5,
      title: 'Sky',
      price: 1000,
      discontPrice: 950,
      ingUrl: '../assets/images/b5.jpg',
    },
    { id: 6,
      title: 'River',
      price: 200,
      discontPrice: 200,
      ingUrl: '../assets/images/b6.jpg',
    }
]
}
