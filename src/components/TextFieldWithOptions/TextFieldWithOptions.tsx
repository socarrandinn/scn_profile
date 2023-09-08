import { FlexBox, FormTextFieldProps } from '@dfl/mui-react-common';
import { ButtonProps, InputAdornment, MenuProps, TextField } from '@mui/material';
import { memo, useCallback, useState } from 'react';
import OptionMenu from './OptionMenu';

export type TextFieldWithOptionsProps = FormTextFieldProps & {
  textFieldValue: string;
  optionFieldValue: string;
  options: string[];
  buttonProps?: ButtonProps;
  menuProps?: MenuProps;
};

const TextFieldWithOptions = ({
  textFieldValue,
  optionFieldValue,
  value = { [textFieldValue]: '', [optionFieldValue]: '' },
  name,
  options,
  onChange,
  buttonProps,
  menuProps,
  ...rest
}: TextFieldWithOptionsProps) => {
  const [valueState, setValueState] = useState(value);

  const onChangeValueStateHandler = useCallback(({ target }: any) => {
    setValueState((prev: any) => ({
      ...prev,
      [target.name]: target.value,
    }));
  }, []);

  return (
    <FlexBox gap={4} alignItems={'center'} justifyContent={'center'}>
      <TextField
        id='text-field'
        name={textFieldValue}
        value={Object(valueState)[textFieldValue]}
        onChange={onChangeValueStateHandler}
        InputProps={{
          endAdornment: (
            <InputAdornment position='end' sx={{ width: '6rem' }}>
              <OptionMenu
                optionFieldValue={optionFieldValue}
                initialOption={Object(valueState)[optionFieldValue]}
                options={options}
                onChange={onChangeValueStateHandler}
              />
            </InputAdornment>
          ),
        }}
        {...rest}
        sx={{
          '& .MuiInputBase-root': { paddingRight: '0px' },
        }}
      />
    </FlexBox>
  );
};

export default memo(TextFieldWithOptions);
