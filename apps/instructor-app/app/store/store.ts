import { configureStore } from "@reduxjs/toolkit";

import currentQuizSlice from "./currentQuizSlice";

const store = configureStore({
  reducer: {
    quiz: currentQuizSlice.reducer,
  },
});

export default store;