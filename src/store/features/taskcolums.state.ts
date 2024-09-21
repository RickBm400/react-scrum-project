import { createSlice } from '@reduxjs/toolkit';

export const taskColumnSlice = createSlice({
  name: 'taskObject',
  initialState: {
    value: [],
  },
  reducers: {
    setInitialData: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setInitialData } = taskColumnSlice.actions;
export default taskColumnSlice.reducer;

