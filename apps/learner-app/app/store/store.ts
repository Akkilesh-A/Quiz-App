import { configureStore } from "@reduxjs/toolkit";

import quizSlice from "./quizSlice";
import answersSlice from "./answersSlice";

const store = configureStore({
  reducer: {
    quiz: quizSlice.reducer,
    answer : answersSlice.reducer
  },
});

export default store;