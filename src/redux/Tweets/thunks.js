import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://64661aec9c09d77a62fd188a.mockapi.io/users';

export const getTweetsThunk = createAsyncThunk(
  'tweets/getTweets',
  async (data, thunkAPI) => {
    const { page, following } = data;
    try {
      const response = await axios.get(
        `/?page=${page}&limit=3&following=${following}`
      );
      console.log('response from get tweets:>> ', response);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const toggleTweetsThunk = createAsyncThunk(
  'tweets/toggleTweets',
  async (tweet, thunkAPI) => {
    try {
      const response = await axios.put(`/${tweet.id}`, {
        following: !tweet.following,
        followers: tweet.following ? tweet.followers - 1 : tweet.followers + 1,
      });
      console.log('response from toggle tweets:>> ', response);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
