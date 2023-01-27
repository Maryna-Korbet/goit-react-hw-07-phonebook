import { createSlice } from "@reduxjs/toolkit";

const filterInitialState = {
  status: '',
};

const filterSlice = createSlice({
  name: "filters",
  initialState: filterInitialState,
  reducers: {
    setStatusFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
