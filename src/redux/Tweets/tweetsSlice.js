import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getTweetsThunk, toggleTweetsThunk } from './thunks';
import { useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { store } from 'redux/store';

const arrThunk = [getTweetsThunk, toggleTweetsThunk];

// function foo() {
// const filter = useSelector(getFilter);
// }

const createThunks = type => arrThunk.map(el => el[type]);

const tweetsInitialState = {
  tweets: [],
  isLoading: false,
  error: '',
};

const handlePending = state => {
  state.isLoading = true;
};

const handleFulfilled = state => {
  state.isLoading = false;
  state.error = '';
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const handleFulfilledGet = (state, action) => {
  state.tweets.push(...action.payload);
};

const handleFulfilledPut = (state, action) => {
  const index = state.tweets.findIndex(
    tweet => tweet.id === action.payload.id
  );

  state.tweets.splice(index, 1, action.payload);
};

const tweetsSlice = createSlice({
  name: 'tweets',
  initialState: tweetsInitialState,
  reducers: {
    clearTweets(state, action) {
      state.tweets = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getTweetsThunk.fulfilled, handleFulfilledGet)
      .addCase(toggleTweetsThunk.fulfilled, handleFulfilledPut)
      .addMatcher(isAnyOf(...createThunks('pending')), handlePending)
      .addMatcher(isAnyOf(...createThunks('fulfilled')), handleFulfilled)
      .addMatcher(isAnyOf(...createThunks('rejected')), handleRejected);
  },
});

export const { clearTweets } = tweetsSlice.actions;
export const tweetsReducer = tweetsSlice.reducer;
