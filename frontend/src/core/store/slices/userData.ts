import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit';

import { Usuario, ItemCarrito } from 'src/core/types';

export interface UserDataState {
  user?: Usuario | null;
  carrito?: ItemCarrito[] | null;
}

const initialState: UserDataState = {};

export const userDataSlice: Slice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<Usuario>) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
    setCarrito: (state, action: PayloadAction<ItemCarrito[]>) => {
      state.carrito = action.payload;
    },
  },
});

export const { login, logout, setCarrito } = userDataSlice.actions;

export default userDataSlice.reducer;
