import { configureStore } from '@reduxjs/toolkit';
import contactReducer from './contactSlice';
import userReducer from './userSlice'; // Importăm reducerul pentru gestionarea utilizatorului

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    user: userReducer, // Adăugăm reducerul pentru gestionarea utilizatorului
  },
});

export default store;
