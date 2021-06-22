import { createSlice } from '@reduxjs/toolkit';

export const WalletSlice: any = createSlice({
  name: 'wallet',
  initialState: {
    Amount: 0,
    infoTransaction: [],
  },
  reducers: {
    increment: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      /*state.Amount += 1;*/
      // @ts-ignore
      state.infoTransaction = [...state.infoTransaction, { ...action.payload }];
      state.Amount += action.payload.amount;
    },
    expense: (state, action) => {
      // @ts-ignore
      state.infoTransaction = [...state.infoTransaction, { ...action.payload }];
      state.Amount -= action.payload.amount;
    },
    incrementByAmount: (state, action) => {
      state.Amount += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, expense, incrementByAmount } = WalletSlice.actions;

export default WalletSlice.reducer;
