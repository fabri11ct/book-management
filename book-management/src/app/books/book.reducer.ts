import { createReducer, on } from "@ngrx/store";
import { addBook, RemoveBook, addBookSuccess, addBookFailure } from "./book.action";
import { Book } from "../models/book";

export const initialState: Book[] = [];

export const BookReducer = createReducer(
    initialState,
    on(addBook, (state, { id, title, author }) => {return state}),
    on(addBookSuccess, (state, { id, title, author }) => [...state, {id, title, author}]),
    on(addBookFailure, (state, {error}) => {
        console.error(error);
        return state;
    }),


    on(RemoveBook, (state, { bookId }) => state.filter(book => book.id !== bookId))
);

