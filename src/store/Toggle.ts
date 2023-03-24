import { createSlice } from "@reduxjs/toolkit";

interface initialStateType {
  isClicked: boolean;
}

const initialState: initialStateType = {
  isClicked: false,
};

const Toggle = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    toggle: (state) => {
      state.isClicked = !state.isClicked;
    },
  },
});

export default Toggle.reducer;
export const toggleActions = Toggle.actions;
