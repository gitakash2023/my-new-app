// optionSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const optionSlice = createSlice({
  name: 'option',
  initialState: {
    value: 'CWSMOBILEIDPADAPTER',
  },
  reducers: {
    setOption: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setOption } = optionSlice.actions;

export const selectOption = (state) => state.option.value;

export default optionSlice.reducer;
