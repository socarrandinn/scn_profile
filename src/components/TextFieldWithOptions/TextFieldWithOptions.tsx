import { FormTextFieldProps, useDFLForm } from '@dfl/mui-react-common';
import { ButtonProps, FormHelperText, InputAdornment, MenuProps, TextField } from '@mui/material';
import { memo, ReactNode, useCallback, useMemo } from 'react';
import OptionMenu from './OptionMenu';
import { useFormState } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { getErrorMessage } from 'utils/error-utils';

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
  endAdornment?: any;
  CommissionError?: ReactNode;
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
  endAdornment,
  CommissionError,
  ...props
}: TextFieldWithOptionsProps) => {
  const { t } = useTranslation('errors');
  const { watch, control } = useDFLForm();
  const previewValue = useMemo(() => watch?.(name) || value, [watch, name, value]);

  const { errors } = useFormState({ control, name, exact: true });

  const messageError = getErrorMessage(errors?.[name]);

  const changeTextValueHandler = useCallback(
    (event: any) => {
      onChange({
        target: {
          value: {
            ...previewValue,
            [textFieldValue]: event.target.value,
            [optionFieldValue]: Object(value)[optionFieldValue],
          },
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
          value: {
            ...previewValue,
            [textFieldValue]: Object(value)[textFieldValue],
            [optionFieldValue]: event.target.value,
          },
          name,
        },
      });
    },
    [onChange, textFieldValue, value, optionFieldValue, name, previewValue],
  );

  return (
    <>
      <TextField
        {...props}
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
            <>
              <InputAdornment position='end'>
                {CommissionError}
                <OptionMenu
                  readOnly={props?.readOnly}
                  initialOption={Object(value)[optionFieldValue]}
                  optionFieldValue={optionFieldValue}
                  options={options}
                  onChange={changeOptionValueHandler}
                />
              </InputAdornment>
              {endAdornment}
            </>
          ),
        }}
        sx={{
          '& .MuiInputBase-root': { paddingRight: '0px' },
          background: props.readOnly ? '#e5e7eb' : 'inherit',
        }}
      />

      {messageError ? (
        <FormHelperText error={true} sx={{ pl: 2 }}>
          {t(messageError)}
        </FormHelperText>
      ) : (
        <></>
      )}
    </>
  );
};

export default memo(TextFieldWithOptions);
