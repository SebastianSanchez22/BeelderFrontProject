import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { machinesSlice } from './machinesApi';

export const store = configureStore({
  reducer: {
    [machinesSlice.reducerPath]: machinesSlice.reducer,
  },
  middleware: 
  (getDefaultMiddleware) => getDefaultMiddleware().concat(machinesSlice.middleware), 
});


export type RootState = ReturnType< typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
