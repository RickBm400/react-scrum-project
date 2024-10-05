import { createSlice } from '@reduxjs/toolkit';
import { TaskBoard } from '../../utils/testData';

const initialState: TaskBoard[] = [];

export const taskColumnSlice = createSlice({
  name: 'taskGroup',
  // initial state always needs to be an object
  initialState: {
    value: initialState,
  },
  reducers: {
    setInitialData: (state, action) => {
      state.value = [...action.payload];
    },
    /**
     * @param action { payload } // column row inside
     */
    addTaskToColumn: (state, { payload }) => {
      const { column = -1, row = -1, inside = {} } = payload;
      state.value[column].insides[row] = inside;
    },
    // deleteTaskFromColumn: (state, { payload }) => {},
  },
});

export default taskColumnSlice.reducer;
export const { setInitialData, addTaskToColumn } = taskColumnSlice.actions;

