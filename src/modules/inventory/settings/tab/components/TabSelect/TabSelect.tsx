import { memo } from 'react';
import { FormAsyncSelectAutocompleteField } from '@dfl/mui-react-common';
import { Checkbox } from '@mui/material';
import { isOptionEqualToValue } from 'utils/comparing';
import { ITab } from 'modules/inventory/settings/tab/interfaces';
import { TABS_LIST_KEY } from 'modules/inventory/settings/tab/constants';
import { TabService } from 'modules/inventory/settings/tab/services';

type TabSelectProps = {
  name: string;
  required?: boolean;
  label?: string;
  placeholder?: string;
  helperText?: string;
  multiple?: boolean;
};

const renderLabel = (option: ITab) => option.name || '';

const renderOption = (props: any, option: ITab, { selected }: any) => {
  return (
    <li {...props} key={option._id as string}>
      <Checkbox style={{ marginRight: 8 }} checked={selected} />
      {option.name}
    </li>
  );
};

const TabSelect = ({ name, required, multiple, label, placeholder, helperText }: TabSelectProps) => {
  return (
    <FormAsyncSelectAutocompleteField
      multiple={multiple}
      required={required}
      label={label}
      placeholder={placeholder}
      name={name}
      disableCloseOnSelect={multiple}
      fetchFunc={TabService.search}
      queryKey={TABS_LIST_KEY}
      autoHighlight
      isOptionEqualToValue={isOptionEqualToValue}
      fieldValue={'_id'}
      loadValue
      fetchValueFunc={multiple ? TabService.search : TabService.getOne}
      id='select-tab'
      getOptionLabel={renderLabel}
      renderOption={renderOption}
      helperText={helperText}
    />
  );
};

export default memo(TabSelect);
