import { memo } from 'react';
import { FormSelectField, SelectFieldProps } from '@dfl/mui-react-common';
import { MenuItem } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { CURRENCY_TYPE_ENUM, LIST_CURRENCIES } from 'modules/sales/settings/payment-settings/constants';

const CurrencySelect = ({ name, multiple, label, ...props }: SelectFieldProps) => {
  const { t } = useTranslation('paymentSettings');

  return (
    <FormSelectField
      {...props}
      name={name || 'primaryCurrency'}
      label={label || t('currencies')}
      multiple={multiple}
    >
      {LIST_CURRENCIES?.map((currency: CURRENCY_TYPE_ENUM) => (
        <MenuItem key={currency} value={currency}>
          {currency}
        </MenuItem>
      ))}
    </FormSelectField>
  );
};
export default memo(CurrencySelect);
