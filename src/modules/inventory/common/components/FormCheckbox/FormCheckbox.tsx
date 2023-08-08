import { Checkbox, FormControlLabel } from '@mui/material';
import { Control, Controller, FieldValues } from 'react-hook-form';

type props = {
  name: string;
  label: string;
  control: Control<FieldValues>;
};

const FormCheckbox = ({ name, label, control }: props) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <FormControlLabel control={<Checkbox sx={{ paddingLeft: '0' }} {...field} />} label={label} />
      )}
    />
  );
};

export default FormCheckbox;
