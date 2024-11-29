import { FormCheckBoxField } from '@dfl/mui-react-common';
import { FormGroup } from '@mui/material';
import { memo } from 'react';
type FormTagCheckboxListProps = {
  label: string;
  name: string;
  options: string[];
};

const FormTagCheckboxList = ({ label, name, options }: FormTagCheckboxListProps) => {
  return (
    <FormGroup >
      {options?.map((ch: string) => (
        <FormCheckBoxField key={ch} label={label} name={name} />
      ))}
    </FormGroup>
  );
};

export default memo(FormTagCheckboxList);
