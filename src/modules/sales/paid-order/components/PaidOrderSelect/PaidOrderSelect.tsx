import { memo } from 'react';
import { FormAsyncSelectAutocompleteField } from '@dfl/mui-react-common';
import { Checkbox } from '@mui/material';
import { isOptionEqualToValue } from 'utils/comparing';
import { IPaidOrder } from 'modules/sales/paid-order/interfaces';
import { PAID_ORDERS_LIST_KEY } from 'modules/sales/paid-order/constants';
import { PaidOrderService } from 'modules/sales/paid-order/services';

type PaidOrderSelectProps = {
  name: string;
  required?: boolean;
  label?: string;
  helperText?: string;
  multiple?: boolean;
};

const renderLabel = (option: IPaidOrder) => option.code || '';

const renderOption = (props: any, option: IPaidOrder, { selected }: any) => {
  return (
    <li {...props} key={option._id as string}>
      <Checkbox style={{ marginRight: 8 }} checked={selected} />
      {option.code}
    </li>
  );
};

const PaidOrderSelect = ({ name, required, multiple, label, helperText }: PaidOrderSelectProps) => {
  return (
    <FormAsyncSelectAutocompleteField
      multiple={multiple}
      required={required}
      label={label}
      name={name}
      disableCloseOnSelect={multiple}
      fetchFunc={PaidOrderService.search}
      queryKey={PAID_ORDERS_LIST_KEY}
      autoHighlight
      isOptionEqualToValue={isOptionEqualToValue}
      fieldValue={'_id'}
      loadValue
      fetchValueFunc={multiple ? PaidOrderService.search : PaidOrderService.getOne}
      id='select-paid-order'
      getOptionLabel={renderLabel}
      renderOption={renderOption}
      helperText={helperText}
    />
  );
};

export default memo(PaidOrderSelect);
