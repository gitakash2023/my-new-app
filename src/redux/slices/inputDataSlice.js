// inputDataSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  subject: '',
  customerId: '',
  accountId: '',
  journeyContext: '',
  targetSystem: '',
  ssoCorelationId: ''
};

export const inputDataSlice = createSlice({
  name: 'inputData',
  initialState,
  reducers: {
    setInputData: (state, action) => {
      return {
        ...state,
        ...action.payload
      };
    },
    clearInputData: (state) => {
      return initialState;
    }
  }
});

export const { setInputData, clearInputData } = inputDataSlice.actions;

export default inputDataSlice.reducer;
