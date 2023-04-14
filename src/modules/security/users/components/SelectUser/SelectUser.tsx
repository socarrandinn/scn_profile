import { memo } from 'react';
import { Avatar, Checkbox, ListItemAvatar, ListItemText } from '@mui/material';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { FetchOption, FormAsyncSelectAutocompleteField } from '@dfl/mui-react-common';
import UserServices from 'modules/security/users/services/user.services';
import { USERS_LIST_KEY } from 'modules/security/users/constants/queries';

type SelectUserProps = {
  name: string;
  placeholder?: string;
  helperText?: string;
  fetchOption?: FetchOption;
  label?: string;
  multiple?: boolean;
  fetchValueFunc?: ((payload: any) => Promise<any>) | undefined;
};

const icon = <CheckBoxOutlineBlankIcon fontSize='small' />;
const checkedIcon = <CheckBoxIcon fontSize='small' />;

const isOptionEqualToValue = (option: any, value: any) => {
  const optionId = option?._id || option;
  const valueId = value?._id || value;
  return optionId === valueId;
};

const SelectUser = ({
  name,
  placeholder,
  multiple = true,
  fetchValueFunc,
  label,
  fetchOption,
  helperText,
}: SelectUserProps) => {
  return (
    <FormAsyncSelectAutocompleteField
      multiple={multiple}
      name={name}
      fetchOption={fetchOption}
      fetchFunc={UserServices.search}
      fetchValueFunc={fetchValueFunc || UserServices.search}
      loadValue
      disableCloseOnSelect={multiple}
      label={label}
      queryKey={USERS_LIST_KEY}
      helperText={helperText}
      autoHighlight
      id={`multiple-${name}`}
      isOptionEqualToValue={isOptionEqualToValue}
      getOptionLabel={(option) => option.fullName}
      renderOption={(props, option, { selected }) => (
        <li {...props} key={option._id}>
          <ListItemAvatar>
            <Avatar alt={option.fullName} src={option.avatar} />
          </ListItemAvatar>

          <ListItemText primary={option.fullName} secondary={option.email} />
          <Checkbox icon={icon} checkedIcon={checkedIcon} style={{ marginRight: 8 }} checked={selected} />
        </li>
      )}
      placeholder={placeholder}
    />
  );
};

export default memo(SelectUser);
