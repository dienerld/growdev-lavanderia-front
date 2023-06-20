import { DatePickerValue } from '@components/DatePicker';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Box, Button, Checkbox, Container, TextField, Typography,
} from '@mui/material';
import dayjs, { Dayjs } from 'dayjs';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { z } from 'zod';

const formSchema = z.object({
  name: z.string().min(3).max(255),
  date: z.date().min(new Date(), `Não pode ser menor que ${dayjs(new Date()).format('DD/MM/YYYY')}`),
  completed: z.boolean(),
});
type TFormInput = z.infer<typeof formSchema>

export function NewBooking() {
  const {
    handleSubmit, control, reset, formState: { errors }, getValues, setValue,
  } = useForm<TFormInput>({
    defaultValues: {
      completed: false,
      date: new Date(),
    },
    resolver: zodResolver(formSchema),
  });
  const onSubmit: SubmitHandler<TFormInput> = (data) => {
    reset({ completed: false, date: new Date(), name: '' });
    console.log(data);
  };

  return (
    <Container className="mt-4 flex flex-col items-center w-10/12 md:w-5/12">
      <Typography variant="h3" component="h1">Agendamento</Typography>
      <Box
        component="form"
        className="mt-10 flex flex-col gap-4 w-full"
        onSubmit={handleSubmit(onSubmit)}
      >

        <label htmlFor="name">
          <Controller
            name="name"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                {...field}
                id="name"
                autoComplete="off"
                placeholder="Name"
                error={!!errors.name}
                helperText={errors.name?.message}
                fullWidth
              />
            )}
          />
        </label>

        <DatePickerValue
          value={getValues().date}
          setValue={(value: Dayjs) => setValue('date', value.toDate())}
        />
        {
            errors.date && (
              <Typography variant="caption" color="error" className="self-start">
                {errors.date?.message}
              </Typography>
            )
          }

        <label htmlFor="completed" className="flex items-center">
          <Controller
            name="completed"
            control={control}
            rules={{ required: true }}
            render={({ field }) => <Checkbox {...field} id="completed" className="p-0" />}
          />
          Completed
        </label>

        <Button type="submit" variant="contained">Submit</Button>

      </Box>
    </Container>
  );
}
