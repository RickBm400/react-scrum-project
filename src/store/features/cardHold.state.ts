import { createSlice } from '@reduxjs/toolkit';

const initialState: Record<string, number> = {
  column: -1,
  row: -1,
};

export const cardHold = createSlice({
  name: 'CardHolder',
  initialState: initialState,
  reducers: {
    /**
     * Reset state to default value
     */
    resetCardState: (state) => {
      state.column = -1;
      state.row = -1;
    },
    setCardState: (state, action) => {
      state.column = action.payload.column;
      state.row = action.payload.row;
    },
  },
});

// always export action and reducer
export const { resetCardState, setCardState } = cardHold.actions;
export default cardHold.reducer;

