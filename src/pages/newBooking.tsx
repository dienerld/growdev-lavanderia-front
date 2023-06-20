import { DatePickerValue } from '@components/DatePicker';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Box, Button, Container, FormControlLabel,
  Radio, RadioGroup,  Typography,
} from '@mui/material';
import dayjs, { Dayjs } from 'dayjs';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';

enum EMachine {
  'A'='01',
  'B'='02',
}

enum EHour {
  MORNING = '06:00 a 12:00',
  AFTERNOON = '12:00 a 18:00',
}

const formSchema = z.object({
  machine: z.nativeEnum(EMachine),
  hour: z.nativeEnum(EHour),
  date: z.date().min(new Date(), `Não pode ser menor que ${dayjs(new Date()).format('DD/MM/YYYY')}`),
});
type TFormInput = z.infer<typeof formSchema>

export function NewBooking() {
  const {
    handleSubmit, control, reset, formState: { errors }, getValues, setValue,
  } = useForm<TFormInput>({
    defaultValues: {
      machine: EMachine.A,
      hour: EHour.MORNING,
      date: new Date(),
    },
    resolver: zodResolver(formSchema),
  });

  const onSubmit= handleSubmit((data) => {
    console.log(data);
    reset({ date: new Date(), machine: EMachine.A,hour: EHour.AFTERNOON });
  });

  return (
    <Container className="mt-4 flex flex-col items-center w-10/12 md:w-5/12">
      <Typography variant="h3" component="h1">Agendamento</Typography>
      <Box
        component="form"
        className="mt-10 flex flex-col gap-4 w-full"
      >

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

        <label htmlFor="machine" className="flex items-center gap-4">
          <Typography variant="h6" component="h2"><strong>Máquina: </strong></Typography>
          <Controller
            name="machine"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <RadioGroup {...field} className="flex flex-row">
                <FormControlLabel
                  className="flex-1"
                  value={EMachine.A}
                  control={<Radio />}
                  label={EMachine.A}
                  />
                <FormControlLabel
                  className="flex-1"
                  value={EMachine.B}
                  control={<Radio />}
                  label={EMachine.B}
                />
              </RadioGroup>
            )}
          />
        </label>

        <label htmlFor="hour" className="flex items-center gap-4">
          <Typography variant="h6" component="h2"><strong>Hora: </strong></Typography>
          <Controller
            name="hour"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <RadioGroup {...field} className="flex flex-row">
                <FormControlLabel
                  className="flex-1"
                  value={EHour.MORNING}
                  control={<Radio />}
                  label={EHour.MORNING}
                  />
                <FormControlLabel
                  className="flex-1"
                  value={EHour.AFTERNOON}
                  control={<Radio />}
                  label={EHour.AFTERNOON}
                />
              </RadioGroup>
            )}
          />
        </label>

        <Button type="button" variant="contained" onClick={onSubmit}>Submit</Button>

      </Box>
    </Container>
  );
}
