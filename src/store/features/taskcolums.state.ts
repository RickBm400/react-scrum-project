import { createSlice } from '@reduxjs/toolkit';
import { TaskBoard } from '../../utils/testData';

const initialState: TaskBoard[] = [{ HEADER: '', insides: [] }];

export const taskColumnSlice = createSlice({
  name: 'taskOjectcolumn',
  initialState: initialState,
  reducers: {
    setInitialData: (state, action) => {
      state = action.payload;
    },
    /**
     * @param action { payload } // column row inside
     */
    addTaskToColumn: (state, { payload }) => {
      const { column = -1, row = -1, inside = {} } = payload;
      state[column].insides[row] = inside;
    },
    // deleteTaskFromColumn: (state, { payload }) => {},
  },
});

export default taskColumnSlice.reducer;
export const { setInitialData, addTaskToColumn } = taskColumnSlice.actions;

