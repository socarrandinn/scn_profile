import { FormTextFieldProps } from '@dfl/mui-react-common';
import { NumberFormatCustom } from 'components/CurrencyInput';
import { memo, ReactNode } from 'react';
import FormTextFieldWithOptions from 'components/TextFieldWithOptions/FormTextFieldWithOptions';
import { CURRENCY_RATE_MODE } from '../../constants';

type FormCurrencyRateProps = FormTextFieldProps & {
  initPriceType?: string;
  infoView?: ReactNode;
};

const options = Object.values(CURRENCY_RATE_MODE);

const FormCurrencyRate = ({ initPriceType, infoView, ...props }: FormCurrencyRateProps) => {
  return (
    <>
      <FormTextFieldWithOptions
        {...props}
        error={props.error}
        disabled={props.readOnly}
        inputComponent={NumberFormatCustom}
        options={options}
        textFieldValue='value'
        optionFieldValue='mode'
        startAdornment={'$'}
        CommissionError={infoView}
      />
    </>
  );
};

export default memo(FormCurrencyRate);
