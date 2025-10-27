import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  // inti dari REDUX TOOLKIT membuat STORE UTAMA APPLIKASI
  reducer: {
    counter: counterReducer,

    // dan reducer lainnya
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
