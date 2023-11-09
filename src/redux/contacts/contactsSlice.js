import { createSlice } from '@reduxjs/toolkit';
// import { logOut } from '../auth/operations';
import { fetchContacts, addContact, deleteContact } from './operations';
import { handlePending, handleRejected } from './slice';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, action) {
      state.items = action.payload;
      state.isLoading = false;
      state.error = null;
    },

    [fetchContacts.rejected]: handleRejected,

    [addContact.pending]: handlePending,

    [addContact.fulfilled](state, action) {
      state.items.unshift(action.payload);
      state.isLoading = false;
      state.error = null;
    },

    [addContact.rejected]: handleRejected,

    [deleteContact.pending]: handlePending,

    [deleteContact.fulfilled](state, action) {
      const index = state.items.findIndex(
        contact => contact.id === action.payload.id
      );
      state.items.splice(index, 1);
      state.isLoading = false;
      state.error = null;
    },

    [deleteContact.rejected]: handleRejected,
  },
});
export const contactsReducer = contactsSlice.reducer;
