import { createSlice } from '@reduxjs/toolkit';

const bookItems = [];
const initialState = {
  bookItems,
  total: 0,
  isLoading: true,
};

const booksSlice = createSlice({
  name: 'Books',
  initialState,
  reducers: {
    AddBook: (state, action) => {
      const states = state;
      const ItemId = action.payload;
      states.bookItems = state.bookItems.push(ItemId);
    },
    removeBook: (state, action) => {
      const states = state;
      const ItemId = action.payload;
      states.bookItems = state.bookItems.filter((item) => item.id !== ItemId);
    },
  },
});

export const { AddBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
