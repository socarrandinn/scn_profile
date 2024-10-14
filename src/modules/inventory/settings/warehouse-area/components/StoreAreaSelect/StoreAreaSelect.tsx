import { memo } from 'react';
import { FormAsyncSelectAutocompleteField } from '@dfl/mui-react-common';
import { Checkbox } from '@mui/material';
import { isOptionEqualToValue } from 'utils/comparing';
import { IStoreArea } from 'modules/inventory/settings/warehouse-area/interfaces';
import { STORE_AREAS_LIST_KEY } from 'modules/inventory/settings/warehouse-area/constants';
import { WarehouseAreaService } from 'modules/inventory/settings/warehouse-area/services';

type StoreAreaSelectProps = {
  name: string;
  required?: boolean;
  label?: string;
  placeholder?: string;
  helperText?: string;
  multiple?: boolean;
};

const renderLabel = (option: IStoreArea) => option.name || '';

const renderOption = (props: any, option: IStoreArea, { selected }: any) => {
  return (
    <li {...props} key={option._id as string}>
      <Checkbox style={{ marginRight: 8 }} checked={selected} />
      {option.name}
    </li>
  );
};

const StoreAreaSelect = ({ name, required, multiple, label, helperText, ...props }: StoreAreaSelectProps) => {
  return (
    <FormAsyncSelectAutocompleteField
      multiple={multiple}
      required={required}
      label={label}
      name={name}
      disableCloseOnSelect={multiple}
      fetchFunc={WarehouseAreaService.searchClean}
      queryKey={STORE_AREAS_LIST_KEY}
      autoHighlight
      isOptionEqualToValue={isOptionEqualToValue}
      fieldValue={'_id'}
      loadValue
      fetchValueFunc={multiple ? WarehouseAreaService.searchClean : WarehouseAreaService.getOne}
      id='select-store-area'
      getOptionLabel={renderLabel}
      renderOption={renderOption}
      helperText={helperText}
    />
  );
};

export default memo(StoreAreaSelect);
