import { memo } from 'react';
import { Checkbox, ListItemAvatar, ListItemText } from '@mui/material';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { FetchOption, FormAsyncSelectAutocompleteField } from '@dfl/mui-react-common';

import { isOptionEqualToValue } from 'utils/comparing';
import { AvatarMedia } from 'components/AvatarMedia';
import { SupplierService } from 'modules/inventory/provider/supplier/services';
import { SUPPLIER_LIST_CLEAN_KEY } from 'modules/inventory/provider/supplier/constants';
import { ISupplier } from 'modules/inventory/provider/supplier/interfaces';

type SelectSupplierProps = {
  name: string;
  placeholder?: string;
  helperText?: string;
  fetchOption?: FetchOption;
  label?: string;
  multiple?: boolean;
  required?: boolean;
  fetchValueFunc?: ((payload: any) => Promise<any>) | undefined;
};

const icon = <CheckBoxOutlineBlankIcon fontSize='small' />;
const checkedIcon = <CheckBoxIcon fontSize='small' />;

const renderLabel = (option: ISupplier) => option.name || '';

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

const SelectSupplier = ({ name, multiple = false, label, helperText, ...props }: SelectSupplierProps) => {
  return (
    <FormAsyncSelectAutocompleteField
      {...props}
      multiple={multiple}
      label={label}
      name={name}
      loadValue
      disableCloseOnSelect={multiple}
      fetchFunc={SupplierService.search}
      queryKey={SUPPLIER_LIST_CLEAN_KEY}
      autoHighlight
      id={`multiple-${name}`}
      getOptionLabel={renderLabel}
      renderOption={renderOption}
      helperText={helperText}
      isOptionEqualToValue={isOptionEqualToValue}
    />
  );
};

export default memo(SelectSupplier);
