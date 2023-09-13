import { FormTextFieldProps } from '@dfl/mui-react-common';
import { ButtonProps, InputAdornment, MenuProps, TextField } from '@mui/material';
import { memo } from 'react';
import OptionMenu from './OptionMenu';

export type TextFieldWithOptionsProps = FormTextFieldProps & {
  name: string;
  type?: string;
  textFieldValue: string;
  optionFieldValue: string;
  options: string[];
  buttonProps?: ButtonProps;
  menuProps?: MenuProps;
  inputComponent?: any;
  onChange?: any;
  min?: number;
  max?: number;
  startAdornment?: string;
};

const TextFieldWithOptions = ({
  name,
  type,
  value,
  textFieldValue,
  optionFieldValue,
  defaultValue = { [textFieldValue]: '', [optionFieldValue]: '' },
  options,
  onChange,
  buttonProps,
  menuProps,
  inputComponent,
  min,
  max,
  startAdornment,
  ...props
}: TextFieldWithOptionsProps) => {
  return (
    <TextField
      id='text-field'
      type={type}
      name={textFieldValue}
      value={Object(defaultValue)[textFieldValue]}
      onChange={onChange}
      InputProps={{
        inputProps: { min, max },
        inputComponent,
        startAdornment: <InputAdornment position='start'>{startAdornment}</InputAdornment>,
        endAdornment: (
          <InputAdornment position='end'>
            <OptionMenu
              optionFieldValue={optionFieldValue}
              initialOption={Object(defaultValue)[optionFieldValue]}
              options={options}
              onChange={onChange}
            />
          </InputAdornment>
        ),
      }}
      {...props}
      sx={{
        '& .MuiInputBase-root': { paddingRight: '0px' },
      }}
    />
  );
};

export default memo(TextFieldWithOptions);
