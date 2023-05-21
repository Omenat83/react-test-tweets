import { configureStore } from '@reduxjs/toolkit';
import { tweetsReducer } from './Tweets/tweetsSlice';
import { filterReducer } from './Filter/filterSlice';

export const store = configureStore({
  reducer: {
    tweets: tweetsReducer,
    filter: filterReducer,
  },
});
