import { configureStore } from '@reduxjs/toolkit';
import personnesReducer from './personnesSlice';

const store = configureStore({
  reducer: {
    personnes: personnesReducer,
  },
});

export default store;