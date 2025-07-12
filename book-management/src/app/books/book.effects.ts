import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as bookActions from './book.action';
import { BookService } from "./book.service";
import { mergeMap, map, catchError, of } from "rxjs";

@Injectable()
export class BookEffects{
    //effetto ngrx che risponde all'azione addBook
    addBook$ = createEffect(() => this.action$.pipe(
        ofType(bookActions.addBook), 
        //per tutte le azioni addBook chiama addBook nel book-service
        mergeMap((action) => this.bookService.addBook(action) //mergeMap ci permette di fare piu' chiamate all'addBook senza che ne venga annullata nessuna
        .pipe(
            //se addBook va a buon fine richiama addBooksuccess con i dati del libro
            map(book => bookActions.addBookSuccess(book)),
            //se addBook fallisce richiama addBookFailure con l'errore
            catchError((error) => of(bookActions.addBookFailure({error})))
        )
    )));

    constructor(private action$:  Actions,
        private bookService: BookService
    ){}
    

}