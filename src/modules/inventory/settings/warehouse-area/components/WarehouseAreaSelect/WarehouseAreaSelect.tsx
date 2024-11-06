import { memo } from 'react';
import { FormAsyncSelectAutocompleteField } from '@dfl/mui-react-common';
import { Checkbox } from '@mui/material';
import { isOptionEqualToValue } from 'utils/comparing';
import { IWarehouseArea } from 'modules/inventory/settings/warehouse-area/interfaces';
import { WAREHOUSE_AREAS_LIST_KEY } from 'modules/inventory/settings/warehouse-area/constants';
import { WarehouseAreaService } from 'modules/inventory/settings/warehouse-area/services';

type WarehouseAreaSelectProps = {
  name: string;
  required?: boolean;
  label?: string;
  placeholder?: string;
  helperText?: string;
  multiple?: boolean;
};

const renderLabel = (option: IWarehouseArea) => option.name || '';

const renderOption = (props: any, option: IWarehouseArea, { selected }: any) => {
  return (
    <li {...props} key={option._id as string}>
      <Checkbox style={{ marginRight: 8 }} checked={selected} />
      {option.name}
    </li>
  );
};

const WarehouseAreaSelect = ({ name, required, multiple, label, helperText, ...props }: WarehouseAreaSelectProps) => {
  return (
    <FormAsyncSelectAutocompleteField
      multiple={multiple}
      required={required}
      label={label}
      name={name}
      disableCloseOnSelect={multiple}
      fetchFunc={WarehouseAreaService.searchClean}
      queryKey={WAREHOUSE_AREAS_LIST_KEY}
      autoHighlight
      isOptionEqualToValue={isOptionEqualToValue}
      fieldValue={'_id'}
      loadValue
      fetchValueFunc={multiple ? WarehouseAreaService.searchClean : WarehouseAreaService.getOne}
      id='select-warehouse-area'
      getOptionLabel={renderLabel}
      renderOption={renderOption}
      helperText={helperText}
    />
  );
};

export default memo(WarehouseAreaSelect);
