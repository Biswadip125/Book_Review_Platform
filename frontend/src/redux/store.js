import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./slices/bookSlice";
import reviewReducer from "./slices/reviewSlice";
import userReducer from "./slices/userSlice";
const store = configureStore({
  reducer: {
    book: bookReducer,
    review: reviewReducer,
    user: userReducer,
  },
});

export default store;
