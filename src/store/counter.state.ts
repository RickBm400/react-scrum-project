import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    incremented: state => {
      state.value++;
    },
    decremented: state => {
      state.value--;
    }
  }
});

export const { incremented, decremented } = counterSlice.actions;
export default counterSlice.reducer