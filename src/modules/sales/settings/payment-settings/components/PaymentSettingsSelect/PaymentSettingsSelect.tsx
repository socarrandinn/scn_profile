import { memo } from 'react';
import { FormAsyncSelectAutocompleteField } from '@dfl/mui-react-common';
import { Checkbox } from '@mui/material';
import { isOptionEqualToValue } from 'utils/comparing';
import { IPaymentSettings } from 'modules/sales/settings/payment-settings/interfaces';
import { PAYMENT_SETTINGS_LIST_KEY } from 'modules/sales/settings/payment-settings/constants';
import { PaymentSettingsService } from 'modules/sales/settings/payment-settings/services';

type PaymentSettingsSelectProps = {
  name: string;
  required?: boolean;
  label?: string;
  placeholder?: string;
  helperText?: string;
  multiple?: boolean;
};

const renderLabel = (option: IPaymentSettings) => option.name || '';

const renderOption = (props: any, option: IPaymentSettings, { selected }: any) => {
  return (
    <li {...props} key={option._id as string}>
      <Checkbox style={{ marginRight: 8 }} checked={selected} />
      {option.name}
    </li>
  );
};

const PaymentSettingsSelect = ({ name, required, multiple, label, helperText, ...props }: PaymentSettingsSelectProps) => {
  return (
    <FormAsyncSelectAutocompleteField
      {...props}
      multiple={multiple}
      required={required}
      label={label}
      name={name}
      disableCloseOnSelect={multiple}
      fetchFunc={PaymentSettingsService.search}
      queryKey={PAYMENT_SETTINGS_LIST_KEY}
      autoHighlight
      isOptionEqualToValue={isOptionEqualToValue}
      fieldValue={'_id'}
      loadValue
      fetchValueFunc={multiple ? PaymentSettingsService.search : PaymentSettingsService.getOne}
      id='select-payment-settings'
      getOptionLabel={renderLabel}
      renderOption={renderOption}
      helperText={helperText}
    />
  );
};

export default memo(PaymentSettingsSelect);
