import { memo } from 'react';
import { FormAsyncSelectAutocompleteField } from '@dfl/mui-react-common';
import { Checkbox } from '@mui/material';
import { isOptionEqualToValue } from 'utils/comparing';
import { IOrderStatus } from 'modules/sales/settings/order-status/interfaces';
import { ORDER_STATUSES_LIST_KEY } from 'modules/sales/settings/order-status/constants';
import { OrderStatusService } from 'modules/sales/settings/order-status/services';

type OrderStatusSelectProps = {
  name: string;
  required?: boolean;
  label?: string;
  placeholder?: string;
  helperText?: string;
  multiple?: boolean;
};

const renderLabel = (option: IOrderStatus) => option.title || '';

const renderOption = (props: any, option: IOrderStatus, { selected }: any) => {
  return (
    <li {...props} key={option._id as string}>
      <Checkbox style={{ marginRight: 8 }} checked={selected} />
      {option.title}
    </li>
  );
};

const OrderStatusSelect = ({ name, required, multiple, label, helperText, ...props }: OrderStatusSelectProps) => {
  return (
    <FormAsyncSelectAutocompleteField
      {...props}
      multiple={multiple}
      required={required}
      label={label}
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
