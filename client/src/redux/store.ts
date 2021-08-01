import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import showCase from "../components/ShowCase/ShowCase.slice";

export const store = configureStore({
  reducer: {
    showCase,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
