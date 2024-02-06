import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TCounter, TIncrementPayload } from './features.types';

const initialState: TCounter = { count: 0 };

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialState,
  reducers: {
    increment: (state) => {
      state.count = state.count + 1;
    },

    incrementByValue: (state, action: PayloadAction<TIncrementPayload>) => {
      state.count = state.count + action.payload.value;
    },

    decrement: (state) => {
      state.count = state.count - 1;
    },
  },
});

export const { increment, incrementByValue, decrement } = counterSlice.actions; //for type define

export default counterSlice.reducer;
