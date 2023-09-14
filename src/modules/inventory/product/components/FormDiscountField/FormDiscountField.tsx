import { FormTextFieldProps, useDFLForm } from '@dfl/mui-react-common';
import { NumberFormatCustom } from 'components/CurrencyInput';
import { FormTextFieldWithOptions } from 'components/TextFieldWithOptions';
import { memo, useMemo } from 'react';
import { PriceType } from '../../interfaces/IProductPriceDetails';

type FormDiscountFieldProps = FormTextFieldProps;

const options = Object.values(PriceType);

const FormDiscountField = (props: FormDiscountFieldProps) => {
  const { watch } = useDFLForm();
  const value = watch?.(props.name);
  const startAdornment = useMemo(() => (value.type === options[0] ? '%' : '$'), [value.type]);

  return (
    <FormTextFieldWithOptions
      {...props}
      inputComponent={NumberFormatCustom}
      options={options}
      textFieldValue='value'
      optionFieldValue='type'
      startAdornment={startAdornment}
    />
  );
};

export default memo(FormDiscountField);
