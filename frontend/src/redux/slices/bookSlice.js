import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [],
  selectedBook: null,
};

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    setBooks: (state, action) => {
      state.books = action.payload;
    },
    setSelectedBook: (state, action) => {
      state.selectedBook = action.payload;
    },
  },
});

export const { setBooks, setSelectedBook } = bookSlice.actions;

export default bookSlice.reducer;
