import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../redux/store";
import ISearch from "./interfaces";

const initialState: ISearch.IState = {
	value: "",
	disabled: true,
	error: "",
};

const searchSlice = createSlice({
	name: "search",
	initialState,
	reducers: {
		setValue(state, action: PayloadAction<Pick<ISearch.IState, "value">>) {
			state.value = action.payload.value;
		},
		clearValue(state) {
			state.value = "";
		},
		createError(state, action: PayloadAction<Pick<ISearch.IState, "error">>) {
			state.error = action.payload.error;
			state.disabled = true;
		},
		clearError(state) {
			state.error = "";
			state.disabled = false;
		},
		setDisabled(
			state,
			action: PayloadAction<Pick<ISearch.IState, "disabled">>
		) {
			state.disabled = action.payload.disabled;
		},
	},
});
export namespace searchSelectors {
	export const selectValue = (state: RootState) => state.searchValue.value;
	export const selectError = (state: RootState) => state.searchValue.error;
}

export const { setValue, clearValue, createError, clearError, setDisabled } =
	searchSlice.actions;

export default searchSlice.reducer;
