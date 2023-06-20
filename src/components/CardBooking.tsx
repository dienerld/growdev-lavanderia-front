import dayjs from 'dayjs';
import { Card, Typography, Button } from '@mui/material';
import { IBooking } from '@store/modules/bookingsSlice';
import { useAppSelector } from '@store/hooks';

interface ICardBookingProps {
  booking: IBooking
  ;
}

export function CardBooking({ booking }: ICardBookingProps) {
  const user = useAppSelector((states) => states.user);

  return (
    <Card className="p-4 flex flex-col gap-2" elevation={2}>
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
