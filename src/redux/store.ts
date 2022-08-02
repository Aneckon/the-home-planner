import { configureStore } from '@reduxjs/toolkit';
import dataNameReducer from './dataName/reducer';

export const store = configureStore({
  reducer: { dataNameReducer },
});

export type RootState = ReturnType<typeof store.getState>;
