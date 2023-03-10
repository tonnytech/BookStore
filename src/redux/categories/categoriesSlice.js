import { createSlice } from '@reduxjs/toolkit';

const initialState = [' '];
const CHECK_STATUS = 'Under construction';

const categoriesSlice = createSlice({
  name: 'Categories',
  initialState,
  reducers: {
    checkStatus: (state, action) => {
      if (action.type === CHECK_STATUS) {
        return 'Under construction';
      }
      return state;
    },
  },
});

export const { checkStatus } = categoriesSlice.actions;

export default categoriesSlice.reducer;
