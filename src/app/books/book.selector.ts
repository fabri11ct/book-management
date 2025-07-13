import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Book } from './book.actions';

export const selectBooksFeature = createFeatureSelector<ReadonlyArray<Book>>('books');

export const selectAllBooks = createSelector(
  selectBooksFeature,
  (books) => books
);