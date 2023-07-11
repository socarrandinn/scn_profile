import { memo } from 'react';
import { FormAsyncSelectAutocompleteField } from '@dfl/mui-react-common';
import { Checkbox } from '@mui/material';
import { isOptionEqualToValue } from 'utils/comparing';
import { ILogistics } from 'modules/provider/logistics/interfaces';
import { LOGISTICS_LIST_KEY } from 'modules/provider/logistics/constants';
import { LogisticsService } from 'modules/provider/logistics/services';

type LogisticsSelectProps = {
  name: string;
  required?: boolean;
  label?: string;
  placeholder?: string;
  helperText?: string;
  multiple?: boolean;
};

const renderLabel = (option: ILogistics) => option.name || '';

const renderOption = (props: any, option: ILogistics, { selected }: any) => {
  return (
    <li {...props} key={option._id as string}>
      <Checkbox style={{ marginRight: 8 }} checked={selected} />
      {option.name}
    </li>
  );
};

const LogisticsSelect = ({ name, required, multiple, label, placeholder, helperText }: LogisticsSelectProps) => {
  return (
    <FormAsyncSelectAutocompleteField
      multiple={multiple}
      required={required}
      label={label}
      placeholder={placeholder}
      name={name}
      disableCloseOnSelect={multiple}
      fetchFunc={LogisticsService.search}
      queryKey={LOGISTICS_LIST_KEY}
      autoHighlight
      isOptionEqualToValue={isOptionEqualToValue}
      fieldValue={'_id'}
      loadValue
      fetchValueFunc={multiple ? LogisticsService.search : LogisticsService.getOne}
      id='select-logistics'
      getOptionLabel={renderLabel}
      renderOption={renderOption}
      helperText={helperText}
    />
  );
};

export default memo(LogisticsSelect);
