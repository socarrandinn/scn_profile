import { memo } from 'react';
import { FormAsyncSelectAutocompleteField } from '@dfl/mui-react-common';
import { Checkbox } from '@mui/material';
import { WorkLocationService } from 'modules/store/product/settings/work-location/services';
import { WORK_LOCATIONS_LIST_KEY } from 'modules/store/product/settings/work-location/constants';
import { IWorkLocation } from 'modules/store/product/settings/work-location/interfaces';
import { isOptionEqualToValue } from 'utils/comparing';

type SelectWorkLocationProps = {
  name: string;
  required?: boolean;
  label?: string;
  placeholder?: string;
  helperText?: string;
  multiple?: boolean;
};

const renderLabel = (option: IWorkLocation) => option.name || '';

const renderOption = (props: any, option: IWorkLocation, { selected }: any) => {
  return (
    <li {...props} key={option._id as string}>
      <Checkbox style={{ marginRight: 8 }} checked={selected} />
      {option.name}
    </li>
  );
};

const SelectWorkLocation = ({ name, required, multiple, label, placeholder, helperText }: SelectWorkLocationProps) => {
  return (
    <FormAsyncSelectAutocompleteField
      multiple={multiple}
      required={required}
      label={label}
      placeholder={placeholder}
      name={name}
      disableCloseOnSelect={multiple}
      fetchFunc={WorkLocationService.search}
      queryKey={WORK_LOCATIONS_LIST_KEY}
      isOptionEqualToValue={isOptionEqualToValue}
      fieldValue={'_id'}
      loadValue
      fetchValueFunc={multiple ? WorkLocationService.search : WorkLocationService.getOne}
      autoHighlight
      id='select-work-location'
      getOptionLabel={renderLabel}
      renderOption={renderOption}
      helperText={helperText}
    />
  );
};

export default memo(SelectWorkLocation);
