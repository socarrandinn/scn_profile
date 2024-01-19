import { memo, useState } from 'react';
import { FormAsyncSelectAutocompleteField } from '@dfl/mui-react-common';
import { Checkbox } from '@mui/material';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { IUser } from 'modules/security/users/interfaces/IUser';
import { USERS_LIST_KEY } from 'modules/security/users/constants/queries';
import { UserService } from 'modules/security/users/services';

type SelectUserProps = {
  name: string;
  label?: string;
  placeholder?: string;
  helperText?: string;
  multiple?: boolean;
};

const icon = <CheckBoxOutlineBlankIcon fontSize='small' />;
const checkedIcon = <CheckBoxIcon fontSize='small' />;

const renderLabel = (option: IUser) => option.fullName || '';

const renderOption = (props: any, option: IUser, { selected }: any) => {
  return (
    <li {...props} key={option._id as string}>
      <Checkbox icon={icon} checkedIcon={checkedIcon} style={{ marginRight: 8 }} checked={selected} />
      {option.fullName}
    </li>
  );
};

const isOptionEqualToValue = (option: IUser | any, value: IUser | any) => {
  const optionId = option?.user || option?._id || option;
  const valueId = value?.user || value?._id || value;
  return optionId === valueId;
};

const SelectUser = ({ name, multiple, label, placeholder, helperText }: SelectUserProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const [autocompleteVal, setAutocompleteVal] = useState([]); // No uncontrolled error

  return (
    <FormAsyncSelectAutocompleteField
      multiple={multiple}
      label={label}
      placeholder={placeholder}
      name={name}
      disableCloseOnSelect={multiple}
      fetchFunc={UserService.search}
      queryKey={USERS_LIST_KEY}
      autoHighlight
      id='select-user'
      getOptionLabel={renderLabel}
      renderOption={renderOption}
      helperText={helperText}
      isOptionEqualToValue={isOptionEqualToValue}
    />
  );
};

export default memo(SelectUser);
