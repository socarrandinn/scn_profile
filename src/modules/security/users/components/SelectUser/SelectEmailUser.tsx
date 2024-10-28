import { memo, useCallback } from 'react';
import { Checkbox, ListItemAvatar, ListItemText } from '@mui/material';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { FetchOption, FormAsyncSelectAutocompleteField, useDFLForm } from '@dfl/mui-react-common';
import { USERS_CLEAN_LIST_KEY } from 'modules/security/users/constants/queries';
import { IUser } from 'modules/security/users/interfaces/IUser';
import { AvatarMedia } from 'components/AvatarMedia';
import { useController } from 'react-hook-form';
import { UserService } from '../../services';

export const isOptionEqualToValue = (option: any, value: any) => {
  const optionId = option?.email || option;
  const valueId = value?.email || value;
  return optionId === valueId;
};

type SelectEmailUserProps = {
  name: string;
  placeholder?: string;
  helperText?: string;
  fetchOption?: FetchOption;
  label?: string;
  required?: boolean;
  fetchValueFunc?: ((payload: any) => Promise<any>) | undefined;
};

const icon = <CheckBoxOutlineBlankIcon fontSize='small' />;
const checkedIcon = <CheckBoxIcon fontSize='small' />;

const renderLabel = (option: any) => option.email || option;

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

const SelectEmailUser = ({ name, label, required, fetchOption, helperText, ...props }: SelectEmailUserProps) => {
  const { control } = useDFLForm();
  const {
    field: { onChange },
  } = useController({ name, control });

  const handleChange = useCallback(
    (e: any) => {
      const value = e?.target?.value;
      if (value) {
        onChange({ email: value });
      }
    },
    [onChange],
  );

  return (
    <FormAsyncSelectAutocompleteField
      {...props}
      freeSolo
      name={name}
      fetchOption={fetchOption}
      fetchFunc={UserService.search}
      fetchValueFunc={UserService.search}
      // loadValue
      required={required}
      label={label}
      queryKey={USERS_CLEAN_LIST_KEY}
      helperText={helperText}
      disableClearable
      fieldValue={'email'}
      id={`multiple-${name}`}
      isOptionEqualToValue={isOptionEqualToValue}
      getOptionLabel={renderLabel}
      renderOption={renderOption}
      onBlur={handleChange}
    />
  );
};

export default memo(SelectEmailUser);
