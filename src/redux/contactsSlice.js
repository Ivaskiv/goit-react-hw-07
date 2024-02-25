import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts, toggleCompleted } from './contactsOperations';

// Створення slice для управління контактами
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [], // Початковий стан масиву контактів
    isLoading: false, // Прапорець, що вказує на те, чи триває завантаження
    error: null, // Об'єкт помилки, який вказує на можливу помилку в процесі завантаження
  },
  filters: {
    name: '', // Об'єкт фільтрів, початковий стан для фільтрації за ім'ям
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        state.isLoading = true; //прапорець, завантаження розпочалося
        state.error = null; //скидання об'єкта помилки
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload; // Заповнення масиву контактів отриманими даними
        state.isLoading = false; //прапорець, завантаження завершено
        state.error = null;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload); // Додавання нового контакту до масиву
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(contact => contact.id !== action.payload);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(toggleCompleted.fulfilled, (state, action) => {
        state.items = state.items.map(contact => {
          if (contact.id === action.payload.id) {
            return action.payload; // Оновлення стану контакту залежно від отриманих даних
          }
          return contact;
        });
        state.isLoading = false;
        state.error = null;
      })
      .addCase(toggleCompleted.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});
// Експорт редуктора для використання в Redux store
export const contactsReducer = contactsSlice.reducer;
