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
  ...props
}: TextFieldWithOptionsProps) => {
  // const [initialValue, setInitialValue] = useState(defaultValue);
  // const maxValue: number | undefined = Object(initialValue)[optionFieldValue] === 'percent' ? 100 : props.max;
  // const minValue: number | undefined = 0 || props.min;

  // const changeValueStateHandler = useCallback(
  //   ({ target }: any) => {
  //     setInitialValue((prev: any) => ({
  //       ...prev,
  //       [target.name]: target.value,
  //     }));
  //     onChange({ target: { name, value: initialValue } });
  //   },
  //   [initialValue],
  // );

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
        endAdornment: (
          <InputAdornment
            position='end'
            // sx={{ width: '6rem' }}
          >
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
