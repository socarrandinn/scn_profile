import { FormTextFieldProps } from '@dfl/mui-react-common';
import { FormGroup, MenuItem, Select, SelectProps, TextField } from '@mui/material';
import { memo, useMemo } from 'react';

export type TextFieldWithOptionsProps = FormTextFieldProps & {
  value: { text: string; option: string };
  options: string[];
  selectProps?: SelectProps;
  onChange?: any;
  name: string;
};

const TextFieldWithOptions = (props: TextFieldWithOptionsProps) => {
  const { value, options, selectProps, onChange, ...rest } = useMemo(() => props, [props]);

  return (
    <FormGroup row={true} sx={{ display: 'flex', flexWrap: 'nowrap' }}>
      <TextField
        value={value.text}
        onChange={onChange}
        sx={{
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderEndEndRadius: '0px',
              borderStartEndRadius: '0px',
              maxHeight: '100%',
            },
          },
        }}
        {...rest}
      />
      <Select
        name='option'
        value={value.option}
        onChange={onChange}
        sx={{
          maxWidth: '10rem',
          borderStartStartRadius: '0px',
          borderEndStartRadius: '0px',
          paddingRight: '1rem',
        }}
        {...selectProps}
      >
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormGroup>
  );
};

export default memo(TextFieldWithOptions);
