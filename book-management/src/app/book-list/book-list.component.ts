import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addBook, removeBook, Book } from '../books/book.actions';
import { selectAllBooks } from '../books/book.selector';

export interface AppState {
  books: ReadonlyArray<Book>;
}

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {

book$: Observable<readonly Book[]>;

  constructor(private store: Store<AppState>) {
    this.book$ = this.store.select(selectAllBooks);
  }

  addBook(id: string, title: string, author: string): void {
    if (!id || !title || !author) {
      alert('Per favore, compila tutti i campi.');
      return;
    }
    const book: Book = { id, title, author };
    this.store.dispatch(addBook({ book }));
  }

  removeBook(id: string): void {
    this.store.dispatch(removeBook({ bookId: id }));
  }
}