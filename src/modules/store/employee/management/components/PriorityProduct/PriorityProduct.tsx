import Box from '@mui/material/Box';
import FormSlider from 'modules/store/employee/common/components/FormSlider/FormSlider';
import { FieldValues, Control } from 'react-hook-form';
import { PriorityMarks } from '../../constants/marks';

function valuetext(value: number) {
  return `${value}0`;
}

type props = {
  control: Control<FieldValues>;
};

export default function PriorityProduct({ control }: props) {
  return (
    <Box sx={{ width: '100%' }}>
      <FormSlider
        name={'priorityLevel'}
        control={control}
        defaultValue={0}
        step={10}
        getAriaValueText={valuetext}
        marks={PriorityMarks}
      />
    </Box>
  );
}
