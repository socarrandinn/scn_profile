import { memo } from 'react';
import { FormAsyncSelectAutocompleteField } from '@dfl/mui-react-common';
import { Checkbox } from '@mui/material';
import { isOptionEqualToValue } from 'utils/comparing';
import { IUsersInvite } from 'modules/security/users-invite/interfaces';
import { USERS_INVITES_LIST_KEY } from 'modules/security/users-invite/constants';
import { UsersInviteService } from 'modules/security/users-invite/services';

type UsersInviteSelectProps = {
  name: string;
  required?: boolean;
  label?: string;
  placeholder?: string;
  helperText?: string;
  multiple?: boolean;
};

const renderLabel = (option: IUsersInvite) => option.name || '';

const renderOption = (props: any, option: IUsersInvite, { selected }: any) => {
  return (
    <li {...props} key={option._id as string}>
      <Checkbox style={{ marginRight: 8 }} checked={selected} />
      {option.name}
    </li>
  );
};

const UsersInviteSelect = ({ name, required, multiple, label, helperText, ...props }: UsersInviteSelectProps) => {
  return (
    <FormAsyncSelectAutocompleteField
      multiple={multiple}
      required={required}
      label={label}
      name={name}
      disableCloseOnSelect={multiple}
      fetchFunc={UsersInviteService.search}
      queryKey={USERS_INVITES_LIST_KEY}
      autoHighlight
      isOptionEqualToValue={isOptionEqualToValue}
      fieldValue={'_id'}
      loadValue
      fetchValueFunc={multiple ? UsersInviteService.search : UsersInviteService.getOne}
      id='select-users-invite'
      getOptionLabel={renderLabel}
      renderOption={renderOption}
      helperText={helperText}
    />
  );
};

export default memo(UsersInviteSelect);
