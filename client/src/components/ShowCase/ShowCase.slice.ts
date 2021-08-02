import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../redux/store";
import IShowCase from "./interfaces";

const initialState: IShowCase.IState = {
  showCaseList: {},
  loading: false,
  error: "",
};

type IFetchProps = {
  url: string;
  name: string;
};
type IFetchTodosError = {
  message: number;
};

type IFetchFuilfield = {
  data: [];
} & Pick<IFetchProps, "name">;

export const fetchShowCase = createAsyncThunk(
  "ShowCase/fetchShowCase",
  async ({ url, name }: IFetchProps, thunkApi) => {
    try {
      const response = await fetch(url);
      if (response.status !== 200) {
        return thunkApi.rejectWithValue({
          message: response.status,
        });
      }
      const json = await response.json();
      const data: string = json.data.fixed_height_downsampled_url;
      return { data, name };
    } catch (e) {
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
    createError(state, action: PayloadAction<Pick<IShowCase.IState, "error">>) {
      state.error = action.payload.error;
    },
    clearError(state) {
      state.error = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchShowCase.fulfilled, (state, action) => {
      if (!action.payload.data) {
        builder.addCase(fetchShowCase.fulfilled, (state, action) => {
          state.error = "К сожалению ничего не найдено";
        });
      }
      state.loading = false;
      let getter = state.showCaseList[action.payload.name] ?? [];
      getter.push({
        photoSrc: action.payload.data,
        date: Date.now(),
        name: action.payload.name,
      });
      state.showCaseList[action.payload.name] = getter;
    });
    builder.addCase(fetchShowCase.rejected, (state, action) => {
      state.error = "Произошла ошибка на сервере, повторите позднее";
    });
    builder.addCase(fetchShowCase.pending, (state) => {
      state.loading = true;
    });
  },
});

export namespace showCaseSelectors {
  export const selectError = (state: RootState) => state.showCase.error;
  export const selectLoading = (state: RootState) => state.showCase.loading;
  export const selectShowCaseList = (state: RootState) =>
    state.showCase.showCaseList;
}

export const { updateLoading, createError, clearError } = showCaseSlice.actions;

export default showCaseSlice.reducer;
