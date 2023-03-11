/* eslint-disable */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import books from '../state/StateSlice';

const apiKey = 'pftQy1c1zMqzYdxZiGha'

const baseUrl = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${apiKey}/books`;

export const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  async (_, API) => {
    try {
      const response = await axios(baseUrl);
      return response.data;
    } catch (error) {
      return API.rejectWithValue(
        error?.data?.message || 'Something went wrong!',
      );
    }
  },
);

export const postBook = createAsyncThunk(
  'books/postBook',
  async (book, API) => {
    try {
      const response = await axios.post(baseUrl, book);
      return response.data;
    } catch (error) {
      return API.rejectWithValue(
        error?.data?.message || 'Something went wrong!',
      );
    }
  },
);

export const deleteApiBook = createAsyncThunk(
  'books/deleteApiBook',
  async (id, API) => {
    try {
      const response = await axios.delete(`${baseUrl}/${id}`);

      return response.data;
    } catch (error) {
      return API.rejectWithValue(
        error?.data?.message || 'Something went wrong!',
      );
    }
  },
);

const initialState = { 
  books: [],
 };

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
  extraReducers: (builder) => {
    builder
      .addCase(postBook.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(postBook.fulfilled, (state) => ({
        ...state,
        isLoading: false,
      }))
      .addCase(postBook.rejected, (state) => ({
        ...state,
        isLoading: false,
      }));

    builder
      .addCase(fetchBooks.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(fetchBooks.fulfilled, (state, action) => {
        const newState = { ...state, isLoading: false };
        const responseObject = action.payload;
        const newBooksArr = [];

        Object.keys(responseObject).forEach((id) => {
          const bookObj = responseObject[id][0];
          bookObj.item_id = id;
          newBooksArr.push(bookObj);
        });

        newState.books = newBooksArr;
        return newState;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        const newState = { ...state, state: 'failed', error: action.error.message };
        return newState;
      });
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
