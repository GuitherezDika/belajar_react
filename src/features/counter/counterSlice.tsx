import { createSlice } from "@reduxjs/toolkit";

interface CounterSlice {
  value: number;
}

const initialState: CounterSlice = {value: 0};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => { state.value += 1},
    decrement: (state) => { state.value -= 1},
    reset: (state) => {state.value = 0}
  }
})

export const {increment, decrement, reset} = counterSlice.actions;
export default counterSlice.reducer;

/*
CreateSlice = fungsi utama Redux Toolkit 
    membuat slice reducers baru (fungsi ubah state) = nama slice = 'counter'
    membuat state baru { value: 0 }
    membuat action reducers = increment, decrement, reset

    createSLice => return action creator = actions
*/