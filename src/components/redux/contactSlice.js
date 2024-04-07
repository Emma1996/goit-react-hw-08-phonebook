import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  contacts: [],
  filter: '',
  isLoading: false,
  error: null,
};

const baseURL = 'https://connections-api.herokuapp.com';

// Funcție pentru a extrage token-ul de autorizare din starea Redux
const selectAuthToken = state => state.user.authToken;

// Funcția async thunk pentru a face cererea GET către ruta /contacts
export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { getState }) => {
    try {
      const authToken = selectAuthToken(getState()); // Obține token-ul de autorizare
      const response = await axios.get(`${baseURL}/contacts`, {
        headers: {
          Authorization: `Bearer ${authToken}`, // Adaugă token-ul de autorizare în antetul cererii
        },
      });
      return response.data;
    } catch (error) {
      throw Error(error.response.data);
    }
  }
);

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { setFilter } = contactSlice.actions;
export const { addContact } = contactSlice.actions;
export const { deleteContact } = contactSlice.actions;

export default contactSlice.reducer;
