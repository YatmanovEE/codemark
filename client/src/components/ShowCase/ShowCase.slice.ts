import { timeoutNotes } from "./../Notice/Notice.slice";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../redux/store";
import { addNotes } from "../Notice/Notice.slice";
import IShowCase from "./interfaces";

const initialState: IShowCase.IState = {
	showCaseList: {},
	pendingItem: {
		date: 0,
		name: "",
		photoSrc: "",
		loading: false,
	},
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
			const data: string = await json.data.fixed_height_downsampled_url;
			let date = Date.now();
			thunkApi.dispatch(
				fetchImage({
					name,
					date,
					src: data,
				})
			);
			return { data, name, date };
		} catch (e) {
			thunkApi.dispatch(timeoutNotes({ notes: `Произошла ошибка на сервере` }));
			throw e;
		}
	}
);

export const fetchImage = createAsyncThunk(
	"ShowCase/fetchImage",
	async (
		{
			name,
			date,
			src,
		}: {
			name: string;
			date: number;
			src: string;
		},
		thunkApi
	) => {
		try {
			let url = window.URL;
			let data = await fetch(src);
			let blob = await data.blob();
			return {
				photoSrc: url.createObjectURL(blob),
				date,
				name,
				loading: false,
			};
		} catch (e) {
			thunkApi.dispatch(
				timeoutNotes({ notes: `Похоже что картинку не удалось загрузить` })
			);
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
			let date = action.payload.date;
			let pending: IShowCase.showItem = (state.pendingItem = {
				photoSrc: "",
				date: date,
				name: action.payload.name,
				loading: true,
			});
			getter.push(pending);

			state.showCaseList[action.payload.name] = getter;
		});
		builder.addCase(fetchShowCase.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(fetchShowCase.rejected, (state) => {
			state.loading = false;
		});
		builder.addCase(fetchImage.fulfilled, (state, action) => {
			let index = state.showCaseList[action.payload.name].findIndex(
				(val) => val.date === action.payload.date
			);
			state.showCaseList[action.payload.name][index] = {
				...state.showCaseList[action.payload.name][index],
				loading: false,
				photoSrc: action.payload.photoSrc,
			};
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
