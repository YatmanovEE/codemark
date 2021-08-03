import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../redux/store";
import INav from "./interface";

const initialState: INav.IState = {
	selector: false,
};

const navSlice = createSlice({
	name: "Nav",
	initialState,
	reducers: {
		switchSelector(state) {
			state.selector = !state.selector;
		},
	},
});

export namespace navSelectors {
	export const selectSelector = (state: RootState) => state.nav.selector;
}

export const { switchSelector } = navSlice.actions;

export default navSlice.reducer;
