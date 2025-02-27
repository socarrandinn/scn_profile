import { FormTextFieldProps, useDFLForm } from '@dfl/mui-react-common';
import { NumberFormatCustom } from 'components/CurrencyInput';
import { memo, ReactNode, useMemo } from 'react';
import { PriceType } from 'modules/inventory/product/interfaces/IProductPriceDetails';
import FormTextFieldWithOptions from 'components/TextFieldWithOptions/FormTextFieldWithOptions';

type FormDiscountFieldProps = FormTextFieldProps & {
  initPriceType?: string;
  CommissionError?: ReactNode;
};

const options = Object.values(PriceType);

const FormDiscountField = ({ initPriceType, CommissionError, ...props }: FormDiscountFieldProps) => {
  const { watch } = useDFLForm();

  const defaultValue = props.defaultValue || { type: options[0], value: 0 };
  const value = watch?.(props.name) || defaultValue;
  let startAdornment = useMemo(() => (value.type === options[0] ? '%' : '$'), [value.type]);

  if (initPriceType !== undefined) {
    initPriceType === 'PERCENT' ? (startAdornment = '%') : (startAdornment = '$');
  }

  return (
    <>
      <FormTextFieldWithOptions
        {...props}
        error={props.error}
        disabled={props.readOnly}
        inputComponent={NumberFormatCustom}
        options={options}
        textFieldValue='value'
        optionFieldValue='type'
        startAdornment={startAdornment}
        CommissionError={CommissionError}
      />
    </>
  );
};

export default memo(FormDiscountField);
