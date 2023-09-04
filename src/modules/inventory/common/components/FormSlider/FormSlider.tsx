import { Slider } from '@mui/material';
import { Control, Controller, FieldValues } from 'react-hook-form';

type props = {
  name: string;
  control: Control<FieldValues>;
  defaultValue: number;
  step: number;
  marks?: Array<{
    value: number;
    label: string;
  }>;
  max?: number;
};

const FormSlider = ({ name, control, step, marks, defaultValue, max }: props) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Slider
          {...field}
          onChange={(_, value) => {
            field.onChange(value);
          }}
          defaultValue={defaultValue}
          valueLabelDisplay='on'
          step={step}
          marks={marks}
          max={max || 100}
        />
      )}
    />
  );
};

export default FormSlider;
