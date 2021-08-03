import { timeoutNotes } from "./../Notice/Notice.slice";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../redux/store";
import { addNotes } from "../Notice/Notice.slice";
import IShowCase from "./interfaces";

const initialState: IShowCase.IState = {
	showCaseList: {},
	loading: false,
};

export const fetchShowCase = createAsyncThunk(
	"ShowCase/fetchShowCase",
	async ({ url, name }: IShowCase.IFetchProps, thunkApi) => {
		try {
			const response = await fetch(url);
			if (response.status !== 200) {
				thunkApi.dispatch(
					timeoutNotes({ notes: `Сервер ответил ошибкой: ${response.status}` })
				);
				return thunkApi.rejectWithValue({
					message: response.status,
				});
			}
			const json = await response.json();
			const data: string = json.data.fixed_height_downsampled_url;
			return { data, name };
		} catch (e) {
			thunkApi.dispatch(addNotes({ notes: `Произошла ошибка на сервере` }));
			throw e;
		}
	}
);

const showCaseSlice = createSlice({
	name: "ShowCase",
	initialState,
	reducers: {
		updateLoading(state) {
			state.loading = !state.loading;
		},
		clearShowCaseList(state) {
			state.showCaseList = {};
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchShowCase.fulfilled, (state, action) => {
			state.loading = false;
			let getter = state.showCaseList[action.payload.name] ?? [];
			getter.push({
				photoSrc: action.payload.data,
				date: Date.now(),
				name: action.payload.name,
			});
			state.showCaseList[action.payload.name] = getter;
		});
		builder.addCase(fetchShowCase.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(fetchShowCase.rejected, (state) => {
			state.loading = false;
		});
	},
});

export namespace showCaseSelectors {
	export const selectLoading = (state: RootState) => state.showCase.loading;
	export const selectShowCaseList = (state: RootState) =>
		state.showCase.showCaseList;
}

export const { updateLoading, clearShowCaseList } = showCaseSlice.actions;

export default showCaseSlice.reducer;
