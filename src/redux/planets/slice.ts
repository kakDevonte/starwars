import { createSlice } from '@reduxjs/toolkit';
import { PlanetsState } from './types';
import { getPlanets } from './asyncActions';

const initialState: PlanetsState = {
  count: 1,
  next: null,
  previous: null,
  results: [],
};

const planetsSlice = createSlice({
  name: 'planets',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPlanets.fulfilled, (state, action) => {
      state.next = action.payload.next;
      state.results = state.results.concat(action.payload.results);
    });
  },
});

export default planetsSlice.reducer;
