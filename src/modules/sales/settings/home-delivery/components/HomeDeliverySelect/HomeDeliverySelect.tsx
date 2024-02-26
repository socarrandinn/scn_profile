import { memo } from 'react';
import { FormAsyncSelectAutocompleteField } from '@dfl/mui-react-common';
import { Checkbox } from '@mui/material';
import { isOptionEqualToValue } from 'utils/comparing';
import { IHomeDelivery } from 'modules/sales/settings/home-delivery/interfaces';
import { HOME_DELIVERIES_LIST_KEY } from 'modules/sales/settings/home-delivery/constants';
import { HomeDeliveryService } from 'modules/sales/settings/home-delivery/services';

type HomeDeliverySelectProps = {
  name: string;
  required?: boolean;
  label?: string;
  placeholder?: string;
  helperText?: string;
  multiple?: boolean;
};

const renderLabel = (option: IHomeDelivery) => option.name || '';

const renderOption = (props: any, option: IHomeDelivery, { selected }: any) => {
  return (
    <li {...props} key={option._id as string}>
      <Checkbox style={{ marginRight: 8 }} checked={selected} />
      {option.name}
    </li>
  );
};

const HomeDeliverySelect = ({ name, required, multiple, label, placeholder, helperText }: HomeDeliverySelectProps) => {
  return (
    <FormAsyncSelectAutocompleteField
      multiple={multiple}
      required={required}
      label={label}
      placeholder={placeholder}
      name={name}
      disableCloseOnSelect={multiple}
      fetchFunc={HomeDeliveryService.search}
      queryKey={HOME_DELIVERIES_LIST_KEY}
      autoHighlight
      isOptionEqualToValue={isOptionEqualToValue}
      fieldValue={'_id'}
      loadValue
      fetchValueFunc={multiple ? HomeDeliveryService.search : HomeDeliveryService.getOne}
      id='select-home-delivery'
      getOptionLabel={renderLabel}
      renderOption={renderOption}
      helperText={helperText}
    />
  );
};

export default memo(HomeDeliverySelect);
