import { FormTextFieldProps } from '@dfl/mui-react-common';
import { NumberFormatCustom } from 'components/CurrencyInput';
import { memo } from 'react';
import FormTextFieldWithOptions from 'components/TextFieldWithOptions/FormTextFieldWithOptions';
import { CURRENCY_RATE_MODE } from '../../constants';
import TooltipError from 'modules/inventory/product/components/ProductPrice/LogisticWarehouseView/TooltipError';
import { useTranslation } from 'react-i18next';
import { FormHelperText } from '@mui/material';

type FormCurrencyRateProps = FormTextFieldProps & {
  mode?: CURRENCY_RATE_MODE;
  messageError?: string;
};

const options = Object.values(CURRENCY_RATE_MODE);

const FormCurrencyRate = ({ mode, messageError, ...props }: FormCurrencyRateProps) => {
  const { t } = useTranslation('paymentSettings');
  const infoView = <TooltipError info note={t(`mode.${mode as string}`)} />;

  return (
    <>
      <FormTextFieldWithOptions
        {...props}
        error={props.error}
        disabled={props.readOnly || mode === CURRENCY_RATE_MODE.AUTOMATIC}
        inputComponent={NumberFormatCustom}
        options={options}
        textFieldValue='exchangeRate'
        optionFieldValue='isCustomRate'
        startAdornment={'$'}
        CommissionError={infoView}
      />
      {messageError ? (
        <FormHelperText error={true} sx={{ pl: 2 }}>
          {t(`errors:${messageError}`)}
        </FormHelperText>
      ) : (
        <></>
      )}
    </>
  );
};

export default memo(FormCurrencyRate);
