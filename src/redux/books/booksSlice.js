/* eslint-disable */
import { createSlice } from '@reduxjs/toolkit';
import books from '../state/StateSlice';

const initialState = { books };

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books = [...state.books, action.payload];
      console.log(state.books)
    },
    removeBook: (state, { payload }) => ({
      ...state,
      books: state.books.filter((book) => book.item_id !== payload),
    }),
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
