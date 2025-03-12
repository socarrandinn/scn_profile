import { memo } from 'react';
import { FormSelectField, SelectFieldProps } from '@dfl/mui-react-common';
import { MenuItem } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { currencyTypeEnumValues } from 'modules/sales/settings/payment-settings/constants';

const CurrencySelect = ({ name, multiple, ...props }: SelectFieldProps) => {
  const { t } = useTranslation('order');

  return (
    <FormSelectField
      {...props}
      name={name || 'primaryCurrency'}
      label={t('invoice.currency')}
      multiple={multiple}
    >
      {currencyTypeEnumValues?.map((currency) => (
        <MenuItem key={currency} value={currency}>
          {currency}
        </MenuItem>
      ))}
    </FormSelectField>
  );
};
export default memo(CurrencySelect);
