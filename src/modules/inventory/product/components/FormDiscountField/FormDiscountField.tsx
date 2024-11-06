import { FormTextFieldProps, useDFLForm } from '@dfl/mui-react-common';
import { NumberFormatCustom } from 'components/CurrencyInput';
import { FormTextFieldWithOptions } from 'components/TextFieldWithOptions';
import { memo, useMemo } from 'react';
import { PriceType } from 'modules/inventory/product/interfaces/IProductPriceDetails';

type FormDiscountFieldProps = FormTextFieldProps & {
  initPriceType?: string;
};

const options = Object.values(PriceType);

const FormDiscountField = ({ initPriceType, ...props }: FormDiscountFieldProps) => {
  const { watch } = useDFLForm();
  const defaultValue = props.defaultValue || { type: options[0], value: 0 };
  const value = watch?.(props.name) || defaultValue;
  let startAdornment = useMemo(() => (value.type === options[0] ? '%' : '$'), [value.type]);

  if (initPriceType !== undefined) {
    initPriceType === 'PERCENT' ? (startAdornment = '%') : (startAdornment = '$');
  }

  return (
    <FormTextFieldWithOptions
      {...props}
      disabled={props.readOnly}
      inputComponent={NumberFormatCustom}
      options={options}
      textFieldValue='value'
      optionFieldValue='type'
      startAdornment={startAdornment}
    />
  );
};

export default memo(FormDiscountField);
