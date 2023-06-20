import { Card, Typography, Button } from '@mui/material';
import dayjs from 'dayjs';

export interface IBooking {
  id: number;
  apartment: string
  user: {
    id: number;
    name: string;
  };
  date: Date;
  time: string;
  machine: string;
}

interface ICardBookingProps {
  booking: IBooking;
}

export function CardBooking({ booking }: ICardBookingProps) {
  const user = {
    id: 1,
    name: 'Diener',
  };

  return (
    <Card className="p-4 flex flex-col gap-2">
      <Typography variant="body1">
        <strong>Morador: </strong>
        {`${booking.apartment} - ${booking.user.name}`}
      </Typography>
      <Typography variant="body1">
        <strong>Data: </strong>
        {dayjs(booking.date).format('DD-MM-YYYY')}
      </Typography>
      <Typography variant="body1">
        <strong>Máquina: </strong>
        {booking.machine}
      </Typography>

      <Typography variant="body1">
        <strong>Horário: </strong>
        {booking.time}
      </Typography>

      { user.id === booking.user.id
        ? (
          <Button type="button" variant="outlined" className="rounded-full hover:bg-red-500 hover:text-white hover:border-purple-900 border-green-600 border-2">
            Excluir
          </Button>
        ) : undefined}
    </Card>
  );
}
