import { createSlice } from '@reduxjs/toolkit';
import { PeopleState } from './types';
import { getPeople, getPeopleById } from './asyncActions';

const initialState: PeopleState = {
  count: 1,
  next: null,
  previous: null,
  results: [],
  currPeople: null,
};

const peopleSlice = createSlice({
  name: 'people',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPeople.fulfilled, (state, action) => {
      state.next = action.payload.next;
      state.results = state.results.concat(action.payload.results);
    });
    builder.addCase(getPeopleById.fulfilled, (state, action) => {
      state.results.push(action.payload);
    });
  },
});

// export const { peopleSlice } = peopleSlice.actions;
export default peopleSlice.reducer;
