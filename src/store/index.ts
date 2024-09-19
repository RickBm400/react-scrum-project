import { configureStore } from '@reduxjs/toolkit';
import counterState from './counter.state';
import taskcolumsState from './taskcolums.state';

export const store = configureStore({
  reducer: {
    counter: counterState,
    taskGroup: taskcolumsState,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
