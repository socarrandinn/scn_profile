import { FormTextFieldProps } from '@dfl/mui-react-common';
import { NumberFormatCustom } from 'components/CurrencyInput';
import { memo, ReactNode } from 'react';
import FormTextFieldWithOptions from 'components/TextFieldWithOptions/FormTextFieldWithOptions';
import { CURRENCY_RATE_MODE } from '../../constants';
import TooltipError from 'modules/inventory/product/components/ProductPrice/LogisticWarehouseView/TooltipError';
import { useTranslation } from 'react-i18next';

type FormCurrencyRateProps = FormTextFieldProps & {
  mode?: CURRENCY_RATE_MODE;
};

const options = Object.values(CURRENCY_RATE_MODE);

const FormCurrencyRate = ({ mode, ...props }: FormCurrencyRateProps) => {
  const { t } = useTranslation('paymentSettings');
  const infoView = <TooltipError info note={t(`mode.${mode}`)} />

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
