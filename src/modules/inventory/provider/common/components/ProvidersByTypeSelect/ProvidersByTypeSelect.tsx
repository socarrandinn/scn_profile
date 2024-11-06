import { memo, useCallback, useMemo } from 'react';
import { FormAsyncSelectAutocompleteField } from '@dfl/mui-react-common';
import { isOptionEqualToValue } from 'utils/comparing';
import { ProviderService } from '../../services';
import { OTHER_COST_OWNERSHIP_TYPE, OWNERSHIP_TYPES_MAP } from 'modules/inventory/product/constants/product-other-cost.enum';
import { IProvider } from '../../interfaces';
import { ListItemAvatar, ListItemText } from '@mui/material';
import { AvatarMedia } from 'components/AvatarMedia';

type ProvidersByTypeSelectProps = {
  name: string;
  parentName: string;
  required?: boolean;
  label?: string;
  placeholder?: string;
  helperText?: string;
  index: number;
  multiple?: boolean;
  disabled?: boolean;
  setValue?: any;
  value?: any;
  control?: any;
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

const ProvidersByTypeSelect = ({ name, parentName, index, required, readOnly, multiple = false, label, helperText, disabled, type, setValue, value, onChange, ...props }: ProvidersByTypeSelectProps) => {

  const ownershipType = useMemo(() => {
    return OWNERSHIP_TYPES_MAP[type as OTHER_COST_OWNERSHIP_TYPE]
  }, [type]);

  const fetchFunc = useCallback(() => ProviderService.searchProvidersByType(ownershipType), [ownershipType]);

  const handleChange = useCallback((event: any) => {
    const { value } = event.target;
    setValue?.(`${name}`, value?._id);
    setValue?.(`${parentName}.ownershipName`, value?.name);
  }, [onChange, setValue, index, parentName]);

  return (
    <FormAsyncSelectAutocompleteField
      {...props}
      multiple={multiple}
      readOnly={readOnly}
      value={value}
      onChange={handleChange}
      required={required}
      label={label}
      key={ownershipType}
      name={name}
      disableCloseOnSelect={multiple}
      fetchFunc={fetchFunc}
      fetchValueFunc={multiple ? ProviderService.searchProvidersByType : ProviderService.getOne}
      queryKey={`${type}`}
      autoHighlight
      isOptionEqualToValue={isOptionEqualToValue}
      id={`select-provider`}
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
