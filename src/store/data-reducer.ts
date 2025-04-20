import { createReducer } from '@reduxjs/toolkit';
import { fetchData } from './actions';
import { IData_SnippetNews } from '../interfaces/interfaces';

interface DataState {
  data: IData_SnippetNews | null;
  loading: boolean;
  error: Error | null;
}

const initialState: DataState = {
  data: null,
  loading: false,
  error: null,
};

export const dataReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchData.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchData.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    })
    .addCase(fetchData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error as Error; // Приведите action.error к типу Error
    })
    .addDefaultCase((state) => state);
});

export default dataReducer;
