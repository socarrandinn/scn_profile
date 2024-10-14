import { memo } from 'react';
import { FormAsyncSelectAutocompleteField } from '@dfl/mui-react-common';
import { Checkbox } from '@mui/material';
import { isOptionEqualToValue } from 'utils/comparing';
import { IStore } from 'modules/inventory/warehouse/interfaces';
import { WAREHOUSES_LIST_KEY } from 'modules/inventory/warehouse/constants';
import { WarehouseService } from 'modules/inventory/warehouse/services';

type StoreSelectProps = {
  name: string;
  required?: boolean;
  label?: string;
  placeholder?: string;
  helperText?: string;
  multiple?: boolean;
};

const renderLabel = (option: IStore) => option.name || '';

const renderOption = (props: any, option: IStore, { selected }: any) => {
  return (
    <li {...props} key={option._id as string}>
      <Checkbox style={{ marginRight: 8 }} checked={selected} />
      {option.name}
    </li>
  );
};

const StoreSelect = ({ name, required, multiple, label, helperText, ...props }: StoreSelectProps) => {
  return (
    <FormAsyncSelectAutocompleteField
      {...props}
      multiple={multiple}
      required={required}
      label={label}
      name={name}
      disableCloseOnSelect={multiple}
      fetchFunc={WarehouseService.search}
      queryKey={WAREHOUSES_LIST_KEY}
      autoHighlight
      isOptionEqualToValue={isOptionEqualToValue}
      fieldValue={'_id'}
      loadValue
      fetchValueFunc={multiple ? WarehouseService.search : WarehouseService.getOne}
      id='select-store'
      getOptionLabel={renderLabel}
      renderOption={renderOption}
      helperText={helperText}
    />
  );
};

export default memo(StoreSelect);
