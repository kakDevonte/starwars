import { createAsyncThunk } from '@reduxjs/toolkit';
import { starAPI } from '../../api/api';
import { PlanetsState } from './types';

export const getPlanets = createAsyncThunk<PlanetsState, number>(
  'planets/getPlanets',
  async (page) => {
    const { data } = await starAPI.getPlanets(page);
    return data;
  }
);
