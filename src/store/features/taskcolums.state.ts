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
    /**
     * Delete selected node on drag start and remove from source column after
     * being reasigned to new position
     * @param state - scrum dashboard
     * @param action - { column, row }
     */
    deleteTaskFromColumn: (state, { payload }) => {
      const { column = -1, row = -1 } = payload;
      state.value[column].insides.splice(row, 1);
    },
  },
});

export default taskColumnSlice.reducer;
export const { setInitialData, addTaskToColumn, deleteTaskFromColumn } =
  taskColumnSlice.actions;

