import { memo } from 'react';
import { FormAsyncSelectAutocompleteField } from '@dfl/mui-react-common';
import { Checkbox } from '@mui/material';
import { isOptionEqualToValue } from 'utils/comparing';
import { IIncidence } from 'modules/sales/incidence/interfaces';
import { INCIDENCES_LIST_KEY } from 'modules/sales/incidence/constants';
import { IncidenceService } from 'modules/sales/incidence/services';

type IncidenceSelectProps = {
  name: string;
  required?: boolean;
  label?: string;
  placeholder?: string;
  helperText?: string;
  multiple?: boolean;
};

const renderLabel = (option: IIncidence) => option.name || '';

const renderOption = (props: any, option: IIncidence, { selected }: any) => {
  return (
    <li {...props} key={option._id as string}>
      <Checkbox style={{ marginRight: 8 }} checked={selected} />
      {option.name}
    </li>
  );
};

const IncidenceSelect = ({ name, required, multiple, label, placeholder, helperText }: IncidenceSelectProps) => {
  return (
    <FormAsyncSelectAutocompleteField
      multiple={multiple}
      required={required}
      label={label}
      placeholder={placeholder}
      name={name}
      disableCloseOnSelect={multiple}
      fetchFunc={IncidenceService.search}
      queryKey={INCIDENCES_LIST_KEY}
      autoHighlight
      isOptionEqualToValue={isOptionEqualToValue}
      fieldValue={'_id'}
      loadValue
      fetchValueFunc={multiple ? IncidenceService.search : IncidenceService.getOne}
      id='select-incidence'
      getOptionLabel={renderLabel}
      renderOption={renderOption}
      helperText={helperText}
    />
  );
};

export default memo(IncidenceSelect);
