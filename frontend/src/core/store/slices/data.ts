import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit';

export interface DataState {
  search?: string | null;
}

const initialState: DataState = {};

export const dataSlice: Slice<DataState> = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<DataState['search']>) => {
      state.search = action.payload;
    },
  },
});

export const { setSearch } = dataSlice.actions;

export default dataSlice.reducer;
