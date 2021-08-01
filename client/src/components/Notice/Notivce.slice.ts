import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../redux/store";
import INotice from "./interfaces";

const initialState: INotice.IState = {
  notes: "",
};

const noticeSlice = createSlice({
  name: "Notice",
  initialState,
  reducers: {
    clearNotes(state) {
      state.notes = "";
    },
    addNotes(state, action: PayloadAction<INotice.IState>) {
      state.notes = action.payload.notes;
    },
  },
});

export const selectNote = (state: RootState) => state.notice.notes;
export const { clearNotes, addNotes } = noticeSlice.actions;

export default noticeSlice.reducer;
