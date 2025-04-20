import { configureStore } from '@reduxjs/toolkit';
import { dataReducer } from './data-reducer'; // Предположим, у вас есть редуктор counterSlice

const store = configureStore({
  reducer: {
    data: dataReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
