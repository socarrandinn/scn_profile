import { memo } from 'react';
import { FormAsyncSelectAutocompleteField } from '@dfl/mui-react-common';
import { Checkbox } from '@mui/material';
import { isOptionEqualToValue } from 'utils/comparing';
import { IAdvertisement } from 'modules/rrhh/advertisement/interfaces';
import { ADVERTISEMENTS_LIST_KEY } from 'modules/rrhh/advertisement/constants';
import { AdvertisementService } from 'modules/rrhh/advertisement/services';

type AdvertisementSelectProps = {
  name: string;
  required?: boolean;
  label?: string;
  placeholder?: string;
  helperText?: string;
  multiple?: boolean;
};

const renderLabel = (option: IAdvertisement) => option.name || '';

const renderOption = (props: any, option: IAdvertisement, { selected }: any) => {
  return (
    <li {...props} key={option._id as string}>
      <Checkbox style={{ marginRight: 8 }} checked={selected} />
      {option.name}
    </li>
  );
};

const AdvertisementSelect = ({
  name,
  required,
  multiple,
  label,
  placeholder,
  helperText,
}: AdvertisementSelectProps) => {
  return (
    <FormAsyncSelectAutocompleteField
      multiple={multiple}
      required={required}
      label={label}
      placeholder={placeholder}
      name={name}
      disableCloseOnSelect={multiple}
      fetchFunc={AdvertisementService.search}
      queryKey={ADVERTISEMENTS_LIST_KEY}
      autoHighlight
      isOptionEqualToValue={isOptionEqualToValue}
      fieldValue={'_id'}
      loadValue
      fetchValueFunc={multiple ? AdvertisementService.search : AdvertisementService.getOne}
      id='select-advertisement'
      getOptionLabel={renderLabel}
      renderOption={renderOption}
      helperText={helperText}
    />
  );
};

export default memo(AdvertisementSelect);
