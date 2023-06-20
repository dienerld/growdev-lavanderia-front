import dayjs, { Dayjs } from 'dayjs';
import 'dayjs/locale/pt-br';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

interface DatePickerProps {
  value: Date;
  setValue(value: Dayjs): void;
}

export function DatePickerValue({ value, setValue }: DatePickerProps) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-br">
      <DatePicker
        label="Data"
        value={dayjs(value)}
        onChange={(newValue) => setValue(dayjs(newValue))}

      />
    </LocalizationProvider>
  );
}
