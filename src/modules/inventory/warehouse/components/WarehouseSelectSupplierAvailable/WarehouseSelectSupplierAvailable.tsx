import { memo } from 'react';
import { Checkbox, ListItemAvatar, ListItemText } from '@mui/material';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { FetchOption, FormAsyncSelectAutocompleteField } from '@dfl/mui-react-common';
import { isOptionEqualToValue } from 'utils/comparing';
import { AvatarMedia } from 'components/AvatarMedia';
import { ISupplier } from 'modules/inventory/provider/supplier/interfaces';
import { WarehouseSupplierService } from '../../services';
import { WAREHOUSE_SUPPLIER_AVAILABLE_LIST_KEY } from '../../constants';

type WarehouseSelectSupplierAvailableProps = {
  name: string;
  placeholder?: string;
  helperText?: string;
  fetchOption?: FetchOption;
  label?: string;
  multiple?: boolean;
  required?: boolean;
  fetchValueFunc?: ((payload: any) => Promise<any>) | undefined;
  warehouse: string;
  size?: 'small' | 'medium';
  readOnly?: boolean;
  disabled?: boolean;
  value?: any;
};

const icon = <CheckBoxOutlineBlankIcon fontSize='small' />;
const checkedIcon = <CheckBoxIcon fontSize='small' />;

const renderLabel = (option: ISupplier) => option?.name || '';

const renderOption = (props: any, option: ISupplier, { selected }: any) => {
  return (
    <li {...props} key={option._id}>
      <ListItemAvatar>
        <AvatarMedia name={option.name} avatar={option.avatar} />
      </ListItemAvatar>

      <ListItemText primary={option.name} />
      <Checkbox icon={icon} checkedIcon={checkedIcon} style={{ marginRight: 8 }} checked={selected} />
    </li>
  );
};

const WarehouseSelectSupplierAvailable = ({
  name,
  multiple,
  label,
  helperText,
  warehouse,
  readOnly,
  disabled,
  ...props
}: WarehouseSelectSupplierAvailableProps) => {
  return (
    <FormAsyncSelectAutocompleteField
      {...props}
      multiple={multiple}
      label={label}
      name={name}
      fieldValue='_id'
      loadValue
      readOnly={readOnly}
      disabled={disabled}
      disableCloseOnSelect={multiple}
      fetchFunc={(params: any) => WarehouseSupplierService.searchSupplierAvailable(warehouse, params)}
      fetchValueFunc={multiple ? () => WarehouseSupplierService.searchSupplierAvailable(warehouse) : WarehouseSupplierService.getOne}
      queryKey={WAREHOUSE_SUPPLIER_AVAILABLE_LIST_KEY}
      autoHighlight
      key={`${warehouse as string}-${props?.value as string}`}
      includeInputInList={true}
      id={`multiple-${name}`}
      getOptionLabel={renderLabel}
      renderOption={renderOption}
      helperText={helperText}
      isOptionEqualToValue={isOptionEqualToValue}
    />
  );
};

export default memo(WarehouseSelectSupplierAvailable);
