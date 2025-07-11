import { createAction, props } from "@ngrx/store"; 
import { Book } from './../models/book';

export const AddBook = createAction('[Book] add Book', props<Book>());
export const RemoveBook = createAction('[Book] Remove Book', props<{bookId: string}>());
