import { memo } from 'react';
import { FormAsyncSelectAutocompleteField } from '@dfl/mui-react-common';
import { Checkbox } from '@mui/material';
import { IJobPosition } from 'modules/rrhh/settings/job-position/interfaces';
import { JobPositionService } from 'modules/rrhh/settings/job-position/services';
import { JOB_POSITIONS_LIST_KEY } from 'modules/rrhh/settings/job-position/constants';
import { isOptionEqualToValue } from 'utils/comparing';

type SelectJobPositionProps = {
  name: string;
  required?: boolean;
  label?: string;
  placeholder?: string;
  helperText?: string;
  multiple?: boolean;
};

const renderLabel = (option: IJobPosition) => option.name || '';

const renderOption = (props: any, option: IJobPosition, { selected }: any) => {
  return (
    <li {...props} key={option._id as string}>
      <Checkbox style={{ marginRight: 8 }} checked={selected} />
      {option.name}
    </li>
  );
};

const SelectJobPosition = ({ name, required, multiple, label, placeholder, helperText }: SelectJobPositionProps) => {
  return (
    <FormAsyncSelectAutocompleteField
      multiple={multiple}
      required={required}
      label={label}
      placeholder={placeholder}
      name={name}
      disableCloseOnSelect={multiple}
      fetchFunc={JobPositionService.search}
      queryKey={JOB_POSITIONS_LIST_KEY}
      autoHighlight
      isOptionEqualToValue={isOptionEqualToValue}
      fieldValue={'_id'}
      loadValue
      fetchValueFunc={multiple ? JobPositionService.search : JobPositionService.getOne}
      id='select-job-position'
      getOptionLabel={renderLabel}
      renderOption={renderOption}
      helperText={helperText}
    />
  );
};

export default memo(SelectJobPosition);
