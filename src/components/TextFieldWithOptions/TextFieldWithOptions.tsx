import { FormTextFieldProps, useDFLForm } from '@dfl/mui-react-common';
import { ButtonProps, InputAdornment, MenuProps, TextField } from '@mui/material';
import { memo, useCallback, useMemo } from 'react';
import OptionMenu from './OptionMenu';

export type TextFieldWithOptionsProps = FormTextFieldProps & {
  name: string;
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
  value,
  type,
  textFieldValue,
  optionFieldValue,
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
  const { watch } = useDFLForm();
  const previewValue = useMemo(() => watch?.(name) || value, [watch, name, value]);;

  const changeTextValueHandler = useCallback(
    (event: any) => {
      onChange({
        target: {
          value: { ...previewValue, [textFieldValue]: event.target.value, [optionFieldValue]: Object(value)[optionFieldValue] },
          name,
        },
      });
    },
    [onChange, textFieldValue, optionFieldValue, value, name, previewValue],
  );

  const changeOptionValueHandler = useCallback(
    (event: any) => {
      onChange({
        target: {
          value: { ...previewValue, [textFieldValue]: Object(value)[textFieldValue], [optionFieldValue]: event.target.value },
          name,
        },
      });
    },
    [onChange, textFieldValue, value, optionFieldValue, name, previewValue],
  );

  return (
    <TextField
      id='text-field'
      type={type}
      name={textFieldValue}
      onChange={changeTextValueHandler}
      value={Object(value)[textFieldValue]}
      InputProps={{
        inputProps: { min, max },
        inputComponent,
        startAdornment: <InputAdornment position='start'>{startAdornment}</InputAdornment>,
        endAdornment: (
          <InputAdornment position='end'>
            <OptionMenu
              readOnly={props?.readOnly}
              initialOption={Object(value)[optionFieldValue]}
              optionFieldValue={optionFieldValue}
              options={options}
              onChange={changeOptionValueHandler}
            />
          </InputAdornment>
        ),
      }}
      {...props}
      sx={{
        '& .MuiInputBase-root': { paddingRight: '0px' },
        background: props.readOnly ? '#e5e7eb' : 'inherit'
      }}
    />
  );
};

export default memo(TextFieldWithOptions);
