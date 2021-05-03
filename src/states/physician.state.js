import { createSlice } from "@reduxjs/toolkit";

const physicianSlice = createSlice({
  name: "physician",
  initialState: {
    selectedPhysician: undefined,
  },
  reducers: {
    setSelectedPhysician: (state, action) => {
      state.selectedPhysician = action.payload;
    },
  },
});

export const physicianActions = physicianSlice.actions;

export default physicianSlice.reducer;
