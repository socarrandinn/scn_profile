import { memo } from 'react';
import { Checkbox, ListItemAvatar, ListItemText } from '@mui/material';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { FetchOption, FormAsyncSelectAutocompleteField } from '@dfl/mui-react-common';
import UserServices from 'modules/security/users/services/user.services';
import { USERS_CLEAN_LIST_KEY } from 'modules/security/users/constants/queries';
import { isOptionEqualToValue } from 'utils/comparing';
import { IUser } from 'modules/security/users/interfaces/IUser';
import { AvatarMedia } from 'components/AvatarMedia';
import { IProvider } from '../../interfaces/IProvider';
import { selectServiceForProviderType } from '../../utils';

const PROVIDERS_CLEAN_LIST_KEY = 'PROVIDERS_CLEAN_LIST_KEY';

type SelectProviderProps = {
  name: string;
  placeholder?: string;
  helperText?: string;
  fetchOption?: FetchOption;
  label?: string;
  multiple?: boolean;
  required?: boolean;
  providerType?: string;
  fetchValueFunc?: ((payload: any) => Promise<any>) | undefined;
};

const icon = <CheckBoxOutlineBlankIcon fontSize='small' />;
const checkedIcon = <CheckBoxIcon fontSize='small' />;

const renderLabel = (option: IProvider) => option.name || '';

const renderOption = (props: any, option: IProvider, { selected }: any) => {
  console.log('En el select provider', option);
  return (
    <li {...props} key={option.name}>
      <ListItemAvatar>
        <AvatarMedia name={option.name} avatar={option.avatar} />
      </ListItemAvatar>

      <ListItemText primary={option.name} />
      <Checkbox icon={icon} checkedIcon={checkedIcon} style={{ marginRight: 8 }} checked={selected} />
    </li>
  );
};

const SelectProvider = ({
  name,
  placeholder,
  multiple = true,
  fetchValueFunc,
  label,
  required,
  fetchOption,
  helperText,
  providerType,
}: SelectProviderProps) => {
  return (
    <FormAsyncSelectAutocompleteField
      multiple={multiple}
      name={name}
      fetchOption={fetchOption}
      fetchFunc={selectServiceForProviderType(providerType).search}
      loadValue
      required={required}
      fetchValueFunc={
        fetchValueFunc ||
        (multiple
          ? selectServiceForProviderType(providerType).searchClean
          : selectServiceForProviderType(providerType).getOne)
      }
      disableCloseOnSelect={multiple}
      label={label}
      queryKey={PROVIDERS_CLEAN_LIST_KEY}
      helperText={helperText}
      autoHighlight
      fieldValue={'_id'}
      id={`multiple-${name}`}
      isOptionEqualToValue={isOptionEqualToValue}
      getOptionLabel={renderLabel}
      renderOption={renderOption}
      placeholder={placeholder}
      defaultValue={multiple ? [] : ''}
    />
  );
};

export default memo(SelectProvider);
