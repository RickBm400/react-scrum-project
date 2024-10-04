import { configureStore } from '@reduxjs/toolkit';
import counterState from './features/counter.state';
import taskcolumsState from './features/taskcolums.state';
import cardHold from './features/cardHold.state';

export const store = configureStore({
  reducer: {
    counter: counterState,
    taskGroup: taskcolumsState,
    cardHold: cardHold,
  },
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
