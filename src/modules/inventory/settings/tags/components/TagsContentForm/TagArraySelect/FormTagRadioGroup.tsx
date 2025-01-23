import { memo } from 'react';
import { FormRadioGroupField } from '@dfl/mui-react-common';
import { FormControlLabel, Radio } from '@mui/material';

type FormTagRadioGroupProps = {
  label: string;
  name: string;
  options: string[];
};

const FormTagRadioGroup = ({ name, options }: FormTagRadioGroupProps) => {
  return (
    <FormRadioGroupField name={name} id={name}>
      {options?.map((value: string) => (
        <FormControlLabel key={value} value={value} control={<Radio />} label={value} />
      ))}
    </FormRadioGroupField>
  );
};

export default memo(FormTagRadioGroup);
