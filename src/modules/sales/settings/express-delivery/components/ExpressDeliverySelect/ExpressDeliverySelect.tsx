import { memo } from 'react';
import { FormAsyncSelectAutocompleteField } from '@dfl/mui-react-common';
import { Checkbox } from '@mui/material';
import { isOptionEqualToValue } from 'utils/comparing';
import { IExpressDelivery } from 'modules/sales/settings/express-delivery/interfaces';
import { EXPRESS_DELIVERIES_LIST_KEY } from 'modules/sales/settings/express-delivery/constants';
import { ExpressDeliveryService } from 'modules/sales/settings/express-delivery/services';

type ExpressDeliverySelectProps = {
  name: string;
  required?: boolean;
  label?: string;
  placeholder?: string;
  helperText?: string;
  multiple?: boolean;
};

const renderLabel = (option: IExpressDelivery) => option.name || '';

const renderOption = (props: any, option: IExpressDelivery, { selected }: any) => {
  return (
    <li {...props} key={option._id as string}>
      <Checkbox style={{ marginRight: 8 }} checked={selected} />
      {option.name}
    </li>
  );
};

const ExpressDeliverySelect = ({ name, required, multiple, label, placeholder, helperText }: ExpressDeliverySelectProps) => {
  return (
    <FormAsyncSelectAutocompleteField
      multiple={multiple}
      required={required}
      label={label}
      placeholder={placeholder}
      name={name}
      disableCloseOnSelect={multiple}
      fetchFunc={ExpressDeliveryService.search}
      queryKey={EXPRESS_DELIVERIES_LIST_KEY}
      autoHighlight
      isOptionEqualToValue={isOptionEqualToValue}
      fieldValue={'_id'}
      loadValue
      fetchValueFunc={multiple ? ExpressDeliveryService.search : ExpressDeliveryService.getOne}
      id='select-express-delivery'
      getOptionLabel={renderLabel}
      renderOption={renderOption}
      helperText={helperText}
    />
  );
};

export default memo(ExpressDeliverySelect);
