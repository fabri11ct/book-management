import { createAction, props } from '@ngrx/store';


export interface Book {
  id: string;
  title: string;
  author: string;
}

export const addBook = createAction(
  '[Book] Add Book',
  props<{ book: Book }>()
);

export const removeBook = createAction(
  '[Book] Remove Book',
  props<{ bookId: string }>()
);

export function addBookFailure(arg0: { error: any; }): any {
  throw new Error('Function not implemented.');
}
export function addBookSuccess(arg0: { book: Book; }): any {
  throw new Error('Function not implemented.');
}

