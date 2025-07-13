import { createReducer, on } from '@ngrx/store';
import { addBook, removeBook, Book } from './book.actions';

export interface BooksState {
  books: ReadonlyArray<Book>;
  lastRemovedBook: Book | null;
}

export const initialState: ReadonlyArray<Book> = [];

export const booksReducer = createReducer(
  initialState,
  on(addBook, (state, { book }) => {
    return [...state, book];
  }),
  on(removeBook, (state, { bookId }) => {
    return state.filter((book) => book.id !== bookId);
  })
);