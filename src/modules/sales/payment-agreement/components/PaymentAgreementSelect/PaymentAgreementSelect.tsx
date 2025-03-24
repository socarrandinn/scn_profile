import { memo } from 'react';
import { FormAsyncSelectAutocompleteField } from '@dfl/mui-react-common';
import { Checkbox } from '@mui/material';
import { isOptionEqualToValue } from 'utils/comparing';
import { IPaymentAgreement } from 'modules/sales/payment-agreement/interfaces';
import { PAYMENT_AGREEMENTS_LIST_KEY } from 'modules/sales/payment-agreement/constants';
import { PaymentAgreementService } from 'modules/sales/payment-agreement/services';

type PaymentAgreementSelectProps = {
  name: string;
  required?: boolean;
  label?: string;
  placeholder?: string;
  helperText?: string;
  multiple?: boolean;
};

const renderLabel = (option: IPaymentAgreement) => option.name || '';

const renderOption = (props: any, option: IPaymentAgreement, { selected }: any) => {
  return (
    <li {...props} key={option._id as string}>
      <Checkbox style={{ marginRight: 8 }} checked={selected} />
      {option.name}
    </li>
  );
};

const PaymentAgreementSelect = ({
  name,
  required,
  multiple,
  label,
  placeholder,
  helperText,
}: PaymentAgreementSelectProps) => {
  return (
    <FormAsyncSelectAutocompleteField
      multiple={multiple}
      required={required}
      label={label}
      name={name}
      disableCloseOnSelect={multiple}
      fetchFunc={PaymentAgreementService.search}
      queryKey={PAYMENT_AGREEMENTS_LIST_KEY}
      autoHighlight
      isOptionEqualToValue={isOptionEqualToValue}
      fieldValue={'_id'}
      loadValue
      fetchValueFunc={multiple ? PaymentAgreementService.search : PaymentAgreementService.getOne}
      id='select-payment-agreement'
      getOptionLabel={renderLabel}
      renderOption={renderOption}
      helperText={helperText}
    />
  );
};

export default memo(PaymentAgreementSelect);
