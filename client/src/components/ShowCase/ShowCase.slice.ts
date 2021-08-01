import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../redux/store";
import IShowCase from "./interfaces";

const initialState: IShowCase.IState = {
  showCaseList: [],
  loading: false,
  error: "",
};

const showCaseSlice = createSlice({
  name: "ShowCase",
  initialState,
  reducers: {
    updateShowCase(state, action: PayloadAction<IShowCase.IState>) {
      state.showCaseList.push(...action.payload.showCaseList);
    },
    createShowCase(state, action: PayloadAction<IShowCase.IState>) {
      state.showCaseList = action.payload.showCaseList;
    },
    updateLoading(state) {
      state.loading = !state.loading;
    },
    createError(state, action: PayloadAction<Pick<IShowCase.IState, "error">>) {
      state.error = action.payload.error;
    },
    clearError(state) {
      state.error = "";
    },
  },
});

export const selectError = (state: RootState) => state.showCase.error;
export const selectLoading = (state: RootState) => state.showCase.loading;
export const selectShowCaseList = (state: RootState) =>
  state.showCase.showCaseList;

export const {
  updateShowCase,
  createShowCase,
  updateLoading,
  createError,
  clearError,
} = showCaseSlice.actions;

export default showCaseSlice.reducer;
