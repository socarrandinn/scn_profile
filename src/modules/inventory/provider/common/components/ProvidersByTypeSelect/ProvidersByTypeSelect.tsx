import { memo, useCallback, useEffect, useMemo } from 'react';
import { FormAsyncSelectAutocompleteField } from '@dfl/mui-react-common';
import { isOptionEqualToValue } from 'utils/comparing';
import { ProviderService } from '../../services';
import { OTHER_COST_OWNERSHIP_TYPE, OWNERSHIP_TYPES_MAP } from 'modules/inventory/product/constants/product-other-cost.enum';
import { IProvider } from '../../interfaces';
import { ListItemAvatar, ListItemText } from '@mui/material';
import { AvatarMedia } from 'components/AvatarMedia';

type ProvidersByTypeSelectProps = {
  name: string;
  parentName?: string;
  required?: boolean;
  label?: string;
  placeholder?: string;
  helperText?: string;
  multiple?: boolean;
  disabled?: boolean;
  setValue?: any;
  control?: any;
  size?: 'small' | 'medium';
  onChange?: any;
  type: string;
  readOnly?: boolean;
};

const renderLabel = (option: any) => option?.name || '';

const renderOption = (props: any, option: IProvider) => {
  return (
    <li {...props} key={option?._id as string}>
      <ListItemAvatar>
        <AvatarMedia name={option?.name} avatar={option?.avatar} />
      </ListItemAvatar>
      <ListItemText primary={option.name} />
    </li>
  );
};

const ProvidersByTypeSelect = ({ name, parentName, required, readOnly, multiple = false, label, helperText, disabled, type, setValue, onChange, ...props }: ProvidersByTypeSelectProps) => {
  const ownershipType = useMemo(() => {
    return OWNERSHIP_TYPES_MAP[type as OTHER_COST_OWNERSHIP_TYPE]
  }, [type]);

  const fetchFunc = useCallback(() => ProviderService.searchProvidersByType(ownershipType), [ownershipType]);

  const getOneFunc = useCallback((params?: any) => {
    return ProviderService.getOneByType(params, ownershipType)
  }, [ownershipType]);

  const handleChange = useCallback((event: any) => {
    const { value } = event.target;
    setValue?.(`${name}`, value?._id);
    if (parentName) {
      setValue?.(`${parentName}.ownershipName`, value?.name);
    }
  }, [setValue, parentName, name]);

  useEffect(() => {
    setValue?.(name, null);
    if (parentName) {
      setValue?.(`${parentName}.ownershipName`, null);
    }
  }, [type, setValue, name, parentName]);

  return (
    <FormAsyncSelectAutocompleteField
      {...props}
      multiple={multiple}
      readOnly={readOnly}
      onChange={handleChange}
      required={required}
      label={label}
      name={name}
      disableCloseOnSelect={multiple}
      fetchFunc={fetchFunc}
      fetchValueFunc={multiple ? fetchFunc : getOneFunc}
      queryKey={`${ownershipType}_LIST`}
      autoHighlight
      isOptionEqualToValue={isOptionEqualToValue}
      id={'select-provider'}
      loadValue
      getOptionLabel={renderLabel}
      renderOption={renderOption}
      helperText={helperText}
      inputProps={{ shrink: true }}
      disabled={disabled || readOnly}
      sx={{
        backgroundColor: readOnly ? '#e5e7eb' : 'inherit',
        fontWeight: readOnly ? 500 : 400,
        cursor: readOnly ? 'pointer' : 'auto'
      }}
    />
  );
};

export default memo(ProvidersByTypeSelect);
