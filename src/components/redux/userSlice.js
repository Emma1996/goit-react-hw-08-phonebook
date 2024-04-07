import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  user: null,
  isLoading: false,
  error: null,
};

const baseURL = 'https://connections-api.herokuapp.com';

export const registerUser = createAsyncThunk(
  'user/register',
  async userData => {
    try {
      const response = await axios.post(`${baseURL}/users/signup`, userData);
      return response.data;
    } catch (error) {
      throw Error(error.response.data);
    }
  }
);

export const loginUser = createAsyncThunk('user/login', async userData => {
  try {
    const response = await axios.post(`${baseURL}/users/login`, userData);
    return response.data;
  } catch (error) {
    throw Error(error.response.data);
  }
});

export const logoutUser = createAsyncThunk('user/logout', async () => {
  try {
    await axios.post(`${baseURL}/users/logout`);
  } catch (error) {
    throw Error(error.response.data);
  }
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(registerUser.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(loginUser.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(logoutUser.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(logoutUser.fulfilled, state => {
        state.isLoading = false;
        state.user = null;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default userSlice.reducer;
