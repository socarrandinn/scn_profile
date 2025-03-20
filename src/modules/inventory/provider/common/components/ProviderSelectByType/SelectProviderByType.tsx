import { memo, useCallback, useMemo } from 'react';
import { FormAsyncSelectAutocompleteField } from '@dfl/mui-react-common';
import { Checkbox, ListItemAvatar, ListItemText } from '@mui/material';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { ILogistics } from 'modules/inventory/provider/logistics/interfaces';
import { AvatarMedia } from 'components/AvatarMedia';
import { ProviderService } from '../../services';
import { PROVIDER_TYPE_ENUM, PROVIDER_TYPE_MAP } from '../../constants';

type SelectLogisticsProps = {
  name: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  type: PROVIDER_TYPE_ENUM;
  helperText?: string;
  setValue?: any;
  multiple?: boolean;
};

const icon = <CheckBoxOutlineBlankIcon fontSize='small' />;
const checkedIcon = <CheckBoxIcon fontSize='small' />;

const renderLabel = (option: any) => option?.name || '';

const renderOption = (props: any, option: any, { selected }: any) => {
  return (
    <li {...props} key={option?._id}>
      <ListItemAvatar>
        <AvatarMedia name={option?.name} avatar={option?.avatar} />
      </ListItemAvatar>

      <ListItemText primary={option?.name} />
      <Checkbox icon={icon} checkedIcon={checkedIcon} style={{ marginRight: 8 }} checked={selected} />
    </li>
  );
};

const isOptionEqualToValue = (option: ILogistics | any, value: ILogistics | any) => {
  const optionId = option?._id || option;
  const valueId = value?._id || value;
  return optionId === valueId;
};

const SelectProviderByType = ({
  name,
  multiple,
  label,
  helperText,
  type,
  setValue,
  readOnly,
  disabled,
  ...props
}: SelectLogisticsProps) => {
  const providerType = useMemo(() => {
    return PROVIDER_TYPE_MAP[type];
  }, [type]);

  const fetchFunc = useCallback(() => ProviderService.searchProvidersByType(providerType), [providerType]);

  const getOneFunc = useCallback(
    (params?: any) => {
      return ProviderService.getOneByType(params, providerType);
    },
    [providerType],
  );

  return (
    <FormAsyncSelectAutocompleteField
      {...props}
      multiple={multiple}
      label={label}
      name={name}
      disabled={disabled || readOnly}
      loadValue
      key={`${type}`}
      disableCloseOnSelect={multiple}
      fetchValueFunc={multiple ? fetchFunc : getOneFunc}
      fetchFunc={fetchFunc}
      queryKey={`${type}_LIST`}
      autoHighlight
      id='select-provider-by-type'
      getOptionLabel={renderLabel}
      renderOption={renderOption}
      helperText={helperText}
      isOptionEqualToValue={isOptionEqualToValue}
    />
  );
};

export default memo(SelectProviderByType);
