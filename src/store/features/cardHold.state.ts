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
    resetState(state) {
      state.column = -1;
      state.row = -1;
    },
    setCardState(state, { payload }) {
      state = payload;
    },
  },
});

// always export action and reducer
export const { resetState } = cardHold.actions;
export default cardHold.reducer;

