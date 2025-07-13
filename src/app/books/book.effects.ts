import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as bookActions from './book.actions'; 
import { BookService } from './book.service'; 
import { Book } from '../models/book';

@Injectable()
export class BookEffects {

  addBook$ = createEffect(() =>
    this.actions$.pipe(
      ofType(bookActions.addBook), 
      mergeMap((action) =>
        this.bookService.addBook(action.book).pipe( 
          
          map(book => bookActions.addBookSuccess({ book })),
          
          catchError((error) => of(bookActions.addBookFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private bookService: BookService
  ) {}
}