import { memo } from 'react';
import { FormAsyncSelectAutocompleteField } from '@dfl/mui-react-common';
import { Checkbox } from '@mui/material';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

import { IWarehouse } from 'modules/inventory/warehouse/interfaces';
import { WarehouseService } from 'modules/inventory/warehouse/services';
import { WAREHOUSES_LIST_KEY } from 'modules/inventory/warehouse/constants';

type SelectStoreProps = {
  name: string;
  label?: string;
  placeholder?: string;
  helperText?: string;
  multiple?: boolean;
};

const icon = <CheckBoxOutlineBlankIcon fontSize='small' />;
const checkedIcon = <CheckBoxIcon fontSize='small' />;

const renderLabel = (option: IWarehouse) => option.name || '';

const renderOption = (props: any, option: IWarehouse, { selected }: any) => {
  return (
    <li {...props} key={option._id as string}>
      <Checkbox icon={icon} checkedIcon={checkedIcon} style={{ marginRight: 8 }} checked={selected} />
      {option.name}
    </li>
  );
};

const isOptionEqualToValue = (option: IWarehouse | any, value: IWarehouse | any) => {
  const optionId = option?.warehouse || option?._id || option;
  const valueId = value?.warehouse || value?._id || value;
  return optionId === valueId;
};

const SelectStore = ({ name, multiple, label, helperText, ...props }: SelectStoreProps) => {
  return (
    <FormAsyncSelectAutocompleteField
      {...props}
      multiple={multiple}
      label={label}
      name={name}
      disableCloseOnSelect={multiple}
      fetchFunc={WarehouseService.search}
      queryKey={WAREHOUSES_LIST_KEY}
      autoHighlight
      id='select-warehouse'
      getOptionLabel={renderLabel}
      renderOption={renderOption}
      helperText={helperText}
      isOptionEqualToValue={isOptionEqualToValue}
      loadValue
    />
  );
};

export default memo(SelectStore);
