import { FormTextFieldProps, useDFLForm } from '@dfl/mui-react-common';
import { NumberFormatCustom } from 'components/CurrencyInput';
import { FormTextFieldWithOptions } from 'components/TextFieldWithOptions';
import { memo, useMemo } from 'react';
import { PriceType } from 'modules/inventory/product/interfaces/IProductPriceDetails';

type FormDiscountFieldProps = FormTextFieldProps;

const options = Object.values(PriceType);

const FormDiscountField = (props: FormDiscountFieldProps) => {
  const { watch } = useDFLForm();
  const defaultValue = props.defaultValue || { type: options[0], value: 0 };
  const value = watch?.(props.name) || defaultValue;
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
