import { CardBooking, IBooking } from '@components/CardBooking';
import { Container, Typography } from '@mui/material';

const bookings: IBooking[] = [
  {
    id: 1,
    apartment: '102',
    user: {
      id: 1,
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
      id: 2,
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
      id: 3,
      name: 'Nikolay',
    },
    date: new Date(),
    time: '10:00',
    machine: '02',
  },
];

export function Home() {
  return (
    <Container className="mt-2 flex flex-col gap-3">
      <Typography variant="h4" component="h1">
        Bem vindo ao sistema de agendamento de consultas
      </Typography>
      {bookings.map((b) => <CardBooking booking={b} />)}

    </Container>
  );
}
