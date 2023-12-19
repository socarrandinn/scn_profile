import { memo } from 'react';
import { FormAsyncSelectAutocompleteField } from '@dfl/mui-react-common';
import { Checkbox } from '@mui/material';
import { isOptionEqualToValue } from 'utils/comparing';
import { IOrderStatus } from 'modules/order-status/interfaces';
import { ORDER_STATUSES_LIST_KEY } from 'modules/order-status/constants';
import { OrderStatusService } from 'modules/order-status/services';

type OrderStatusSelectProps = {
  name: string;
  required?: boolean;
  label?: string;
  placeholder?: string;
  helperText?: string;
  multiple?: boolean;
};

const renderLabel = (option: IOrderStatus) => option.name || '';

const renderOption = (props: any, option: IOrderStatus, { selected }: any) => {
  return (
    <li {...props} key={option._id as string}>
      <Checkbox style={{ marginRight: 8 }} checked={selected} />
      {option.name}
    </li>
  );
};

const OrderStatusSelect = ({ name, required, multiple, label, placeholder, helperText }: OrderStatusSelectProps) => {
  return (
    <FormAsyncSelectAutocompleteField
      multiple={multiple}
      required={required}
      label={label}
      placeholder={placeholder}
      name={name}
      disableCloseOnSelect={multiple}
      fetchFunc={OrderStatusService.search}
      queryKey={ORDER_STATUSES_LIST_KEY}
      autoHighlight
      isOptionEqualToValue={isOptionEqualToValue}
      fieldValue={'_id'}
      loadValue
      fetchValueFunc={multiple ? OrderStatusService.search : OrderStatusService.getOne}
      id='select-order-status'
      getOptionLabel={renderLabel}
      renderOption={renderOption}
      helperText={helperText}
    />
  );
};

export default memo(OrderStatusSelect);
