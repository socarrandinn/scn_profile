import { memo, useCallback } from 'react';
import { Checkbox, ListItemAvatar, ListItemText } from '@mui/material';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { FetchOption, FormAsyncSelectAutocompleteField, useDFLForm } from '@dfl/mui-react-common';
import UserServices from 'modules/security/users/services/user.services';
import { USERS_CLEAN_LIST_KEY } from 'modules/security/users/constants/queries';
import { isOptionEqualToValue } from 'utils/comparing';
import { IUser } from 'modules/security/users/interfaces/IUser';
import { AvatarMedia } from 'components/AvatarMedia';
import { useController } from 'react-hook-form';

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

const renderLabel = (option: IUser | string) => (typeof option === 'string' ? option : option.fullName || '');

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

const SelectEmailUser = ({ name, placeholder, label, required, fetchOption, helperText }: SelectEmailUserProps) => {
  const { control } = useDFLForm();
  const {
    field: { onChange },
  } = useController({ name, control });

  const handleChange = useCallback(
    (e: any) => {
      const value = e?.target?.value;
      if (value) {
        onChange(value);
      }
    },
    [onChange],
  );

  return (
    <FormAsyncSelectAutocompleteField
      freeSolo
      name={name}
      fetchOption={fetchOption}
      fetchFunc={UserServices.searchClean}
      loadValue
      required={required}
      // fetchValueFunc={UserServices.getOne}
      label={label}
      queryKey={USERS_CLEAN_LIST_KEY}
      helperText={helperText}
      disableClearable
      // autoHighlight
      fieldValue={'email'}
      id={`multiple-${name}`}
      isOptionEqualToValue={isOptionEqualToValue}
      getOptionLabel={renderLabel}
      renderOption={renderOption}
      placeholder={placeholder}
      // @ts-ignore
      onInputChange={handleChange}
    />
  );
};

export default memo(SelectEmailUser);
