import { createSlice } from '@reduxjs/toolkit';

// Створення slice для управління фільтрами
const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    nameFilter: '', // Початковий стан з порожнім рядком для фільтра імені
  },
  reducers: {
    setNameFilter: (state, action) => {
      // Редюсер для оновлення nameFilter за допомогою значення з дії
      state.nameFilter = action.payload;
    },
  },
});

export const { setNameFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
export const selectFilter = state => state.filters.nameFilter;
