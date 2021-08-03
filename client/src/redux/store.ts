import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import showCase from "../components/ShowCase/ShowCase.slice";
import notice from "../components/Notice/Notice.slice";
import searchValue from "../components/Search/Search.slice";

export const store = configureStore({
	reducer: {
		showCase,
		notice,
		searchValue,
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
