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
  getAriaValueText: any;
};

const FormSlider = ({ name, control, step, marks, getAriaValueText, defaultValue }: props) => {
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
          getAriaValueText={getAriaValueText}
          step={step}
          marks={marks}
          max={5}
        />
      )}
    />
  );
};

export default FormSlider;
