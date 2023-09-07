import { FlexBox, FormTextFieldProps } from '@dfl/mui-react-common';
import { ButtonProps, InputAdornment, MenuProps, TextField } from '@mui/material';
import { ChangeEvent, memo } from 'react';
import OptionMenu from './OptionMenu';

export type TextFieldWithOptionsProps = FormTextFieldProps & {
  value: { text: ''; option: '' };
  options: string[];
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  buttonProps?: ButtonProps;
  menuProps?: MenuProps;
};

const TextFieldWithOptions = ({
  value,
  options,
  onChange,
  buttonProps,
  menuProps,
  ...props
}: TextFieldWithOptionsProps) => {
  return (
    <FlexBox gap={4} alignItems={'center'} justifyContent={'center'}>
      <TextField
        id='text'
        value={value.text}
        onChange={onChange}
        InputProps={{
          endAdornment: (
            <InputAdornment position='end'>
              <OptionMenu option={value.option} options={options} onChange={onChange} />
            </InputAdornment>
          ),
        }}
        {...props}
      />
    </FlexBox>
  );
};

export default memo(TextFieldWithOptions);
