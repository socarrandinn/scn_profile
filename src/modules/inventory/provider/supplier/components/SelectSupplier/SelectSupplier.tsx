import { memo } from 'react';
import { Checkbox, ListItemAvatar, ListItemText } from '@mui/material';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { FetchOption, FormAsyncSelectAutocompleteField } from '@dfl/mui-react-common';
import { isOptionEqualToValue } from 'utils/comparing';
import { AvatarMedia } from 'components/AvatarMedia';
import { SupplierService } from '../../services';
import { SUPPLIER_LIST_CLEAN_KEY } from '../../constants';
import { ISupplier } from '../../interfaces';

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

const SelectSupplier = ({
  name,
  placeholder,
  multiple = true,
  fetchValueFunc,
  label,
  required,
  fetchOption,
  helperText,
}: SelectSupplierProps) => {
  return (
    <FormAsyncSelectAutocompleteField
      multiple={multiple}
      name={name}
      fetchOption={fetchOption}
      fetchFunc={SupplierService.search}
      loadValue
      required={required}
      fetchValueFunc={fetchValueFunc || (multiple ? SupplierService.search : SupplierService.getOne)}
      disableCloseOnSelect={multiple}
      label={label}
      queryKey={SUPPLIER_LIST_CLEAN_KEY}
      helperText={helperText}
      autoHighlight
      fieldValue={'_id'}
      id={`multiple-${name}`}
      isOptionEqualToValue={isOptionEqualToValue}
      getOptionLabel={renderLabel}
      renderOption={renderOption}
      placeholder={placeholder}
    />
  );
};

export default memo(SelectSupplier);
