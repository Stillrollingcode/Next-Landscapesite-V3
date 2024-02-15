import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filterValue: "",
  isChangeValue: false,
};

export const serviceSlice = createSlice({
  name: "service",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filterValue = action.payload;
    },
  },
});

export const { setFilter } = serviceSlice.actions;

export default serviceSlice.reducer;
