import { createSelector } from '@reduxjs/toolkit';

export const getFilter = state => state.filter;

export const getAllTweets = state => state.tweets;

export const getFilteredTweets = createSelector(
  [getAllTweets, getFilter],
  (tweets, filter) => {
    return tweets.filter(tweet =>
      tweet.following.includes(filter)
    );
  }
);
