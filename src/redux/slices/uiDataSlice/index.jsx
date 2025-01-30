import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
};

export const uiDataSlide = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setLoading } = uiDataSlide.actions;

export default uiDataSlide.reducer;
