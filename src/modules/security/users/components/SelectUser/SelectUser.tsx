import { memo } from 'react';
import { Checkbox, ListItemAvatar, ListItemText } from '@mui/material';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { FetchOption, FormAsyncSelectAutocompleteField } from '@dfl/mui-react-common';
import { USERS_CLEAN_LIST_KEY } from 'modules/security/users/constants/queries';
import { isOptionEqualToValue } from 'utils/comparing';
import { IUser } from 'modules/security/users/interfaces/IUser';
import { AvatarMedia } from 'components/AvatarMedia';
import { UserAdminService } from 'modules/security/users/services';

type SelectUserProps = {
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

const renderLabel = (option: IUser) => option.fullName || '';

const renderOption = (props: any, option: IUser, { selected }: any) => {
  return (
    <li {...props} key={option._id}>
      <ListItemAvatar>
        <AvatarMedia name={option.fullName} avatar={option.avatar} />
      </ListItemAvatar>

      <ListItemText primary={option.fullName} secondary={option.email} />
      <Checkbox icon={icon} checkedIcon={checkedIcon} style={{ marginRight: 8 }} checked={selected} />
    </li>
  );
};

const SelectUser = ({
  name,
  multiple = true,
  fetchValueFunc,
  label,
  required,
  fetchOption,
  helperText,
  ...props
}: SelectUserProps) => {
  return (
    <FormAsyncSelectAutocompleteField
      {...props}
      multiple={multiple}
      name={name}
      fetchOption={fetchOption}
      fetchFunc={UserAdminService.searchClean}
      loadValue
      required={required}
      fetchValueFunc={fetchValueFunc || (multiple ? UserAdminService.searchClean : UserAdminService.getOne)}
      disableCloseOnSelect={multiple}
      label={label}
      queryKey={USERS_CLEAN_LIST_KEY}
      helperText={helperText}
      autoHighlight
      fieldValue={'_id'}
      id={`multiple-${name}`}
      isOptionEqualToValue={isOptionEqualToValue}
      getOptionLabel={renderLabel}
      renderOption={renderOption}
    />
  );
};

export default memo(SelectUser);
