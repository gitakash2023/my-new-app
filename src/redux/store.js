// store.js
import { configureStore } from '@reduxjs/toolkit';
import optionReducer from "./slices/optionSlice"
import inputDataReducer from "./slices/inputDataSlice"

export default configureStore({
  reducer: {
    option: optionReducer,
    inputData: inputDataReducer
  },
});
