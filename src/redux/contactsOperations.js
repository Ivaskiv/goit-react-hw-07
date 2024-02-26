import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://65d6408cf6967ba8e3bdcad5.mockapi.io';

// Оголошення асинхронного генератора екшенів для отримання контактів
export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI) => {
  try {
    // Виклик HTTP-запиту GET для отримання списку контактів
    const responce = await axios.get('/contacts');
    return responce.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});
// Оголошення асинхронного генератора екшенів для додавання
export const addContact = createAsyncThunk('contacts/addContact', async (newContact, thunkAPI) => {
  try {
    // Виклик HTTP-запиту POST для додавання контактів
    const responce = await axios.post('/contacts', newContact);
    return responce.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});
// Оголошення асинхронного генератора екшенів для видалення за ідентифікатором
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      // Виклик HTTP-запиту DELETE для видалення
      await axios.delete(`/contacts/${contactId}`);
      // Повернення ідентифікатора для видалення з локального стану
      return contactId;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
// Оголошення асинхронного генератора екшенів для зміни стану завершеності задачі
export const toggleCompleted = createAsyncThunk(
  'contacts/toggleCompleted',
  async (contact, thunkAPI) => {
    try {
      // Виклик HTTP-запиту PUT для оновлення стану завершеності задачі
      const response = await axios.put(`/contacts/${contact.id}`, {
        completed: !contact.completed,
      });
      // Повернення отриманих даних
      return response.data;
    } catch (e) {
      // Обробка помилок та відхилення з значенням помилки
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
