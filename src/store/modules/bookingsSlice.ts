import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { RootState } from '@store/rootReducer';

export interface IBooking {
  id: number;
  apartment: string
  user: {
    id: string;
    name: string;
  };
  date: Date;
  time: string;
  machine: string;
}

const adapter = createEntityAdapter<IBooking>({
  selectId: (booking) => booking.id,
});

const bookings = [
  {
    id: 1,
    apartment: '102',
    user: {
      id: '1',
      name: 'Diener',

    },
    date: new Date(),
    time: '10:00',
    machine: '01',
  },
  {
    apartment: '103',
    id: 2,
    user: {
      id: '2',
      name: 'Yanne',
    },
    date: new Date(),
    time: '16:00',
    machine: '01',
  },
  {
    id: 3,
    apartment: '104',
    user: {
      id: '3',
      name: 'Nikolay',
    },
    date: new Date(),
    time: '10:00',
    machine: '02',
  },
];

const slice = createSlice({
  name: 'bookings',
  initialState: () => adapter.setAll(adapter.getInitialState(), bookings),
  reducers: {
    addBooking: adapter.addOne,
    removeBooking: adapter.removeOne,
  },
});

export const bookingsReducer = slice.reducer;
export const bookingsActions = slice.actions;
export const bookingsSelectors = adapter.getSelectors<RootState>((s) => s.bookings);
