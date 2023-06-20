import { combineReducers } from '@reduxjs/toolkit';
import { userReducer } from './modules/userSlice';
import { bookingsReducer } from './modules/bookingsSlice';

export const rootReducer = combineReducers({
  user: userReducer,
  bookings: bookingsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
