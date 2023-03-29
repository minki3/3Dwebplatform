import React from "react";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {};

const AllSlice = createSlice({
  name: "All",
  initialState,
  reducers: {
    saveAll: (state, action: PayloadAction) => {
      return action.payload;
    },
  },
});

export default AllSlice.reducer;
export const { saveAll } = AllSlice.actions;
