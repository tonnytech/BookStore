import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/booksSlice';
import catagoriesReducer from './categories/categoriesSlice';

export const store = configureStore({
  reducer: {
    books: bookReducer,
    categories: catagoriesReducer,
  },
});

export default store;
