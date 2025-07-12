import { createAction, props } from "@ngrx/store"; 
import { Book } from './../models/book';

export const addBook = createAction('[Book] add Book', props<Book>());
export const addBookSuccess = createAction('[Book] added Book Successfully', props<Book>());
export const addBookFailure = createAction('[Book] addd book failure', props<{ error: any }>())

export const RemoveBook = createAction('[Book] Remove Book', props<{bookId: string}>());
