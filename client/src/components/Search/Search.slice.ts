import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../redux/store";
import ISearch from "./interfaces";

const initialState: ISearch.IState = {
  value: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setValue(state, action: PayloadAction<ISearch.IState>) {
      state.value = action.payload.value;
    },
    clearValue(state) {
      state.value = "";
    },
  },
});
export namespace searchSelectors {
  export const selectValue = (state: RootState) => state.searchValue.value;
}

export const { setValue, clearValue } = searchSlice.actions;

export default searchSlice.reducer;
