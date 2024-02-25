import { createSelector } from 'reselect';
import { selectFilter } from './filtersSlice';

export const selectContacts = state => state.contacts.items;
export const filterContacts = state => state.items;
export const selectIsLoading = state => state.tasks.isLoading;
export const selectError = state => state.tasks.error;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
  }
);
