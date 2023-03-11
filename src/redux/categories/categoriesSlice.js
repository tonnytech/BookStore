import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categorie: [],
};

const categoriesSlice = createSlice({
  name: 'categorie',
  initialState,
  reducers: {
    checkStatus: () => ['Under construction'],
  },
});

export const { checkStatus } = categoriesSlice.actions;

export default categoriesSlice.reducer;
