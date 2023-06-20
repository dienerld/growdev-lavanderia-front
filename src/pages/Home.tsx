import { Container, Typography } from '@mui/material';
import { CardBooking } from '@components/CardBooking';
import { bookingsSelectors } from '@store/modules/bookingsSlice';
import { useAppSelector } from '@store/hooks';

export function Home() {
  const bookings = useAppSelector(bookingsSelectors.selectAll);

  return (
    <Container className="mt-2 flex flex-col gap-3">
      <Typography variant="h4" component="h1">
        Bem vindo ao sistema de agendamento de consultas
      </Typography>
      {bookings.map((b) => <CardBooking booking={b} key={b.id} />)}

    </Container>
  );
}
