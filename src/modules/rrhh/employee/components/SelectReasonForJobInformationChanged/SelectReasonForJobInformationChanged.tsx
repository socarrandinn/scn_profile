import { memo } from 'react';
import { FormAsyncSelectAutocompleteField } from '@dfl/mui-react-common';
import { Checkbox } from '@mui/material';
import { isOptionEqualToValue } from 'utils/comparing';
import { REASON_FOR_JOB_CHANGES_LIST_KEY } from 'modules/rrhh/settings/reason-for-job-change/constants/queries';
import { ReasonForJobChangeService } from 'modules/rrhh/settings/reason-for-job-change/services';
import { IReasonForJobChange } from 'modules/rrhh/settings/reason-for-job-change/interfaces';

type SelectSelectCategoryProps = {
  name: string;
  required?: boolean;
  label?: string;
  placeholder?: string;
  helperText?: string;
  multiple?: boolean;
};

const renderLabel = (option: IReasonForJobChange) => option.name || '';

const renderOption = (props: any, option: IReasonForJobChange, { selected }: any) => {
  return (
    <li {...props} key={option._id as string}>
      <Checkbox style={{ marginRight: 8 }} checked={selected} />
      {option.name}
    </li>
  );
};

const SelectReasonForJobInformationChanged = ({
  name,
  required,
  multiple,
  label,
  placeholder,
  helperText,
}: SelectSelectCategoryProps) => {
  return (
    <FormAsyncSelectAutocompleteField
      multiple={multiple}
      required={required}
      label={label}
      placeholder={placeholder}
      name={name}
      disableCloseOnSelect={multiple}
      fetchFunc={ReasonForJobChangeService.search}
      queryKey={REASON_FOR_JOB_CHANGES_LIST_KEY}
      autoHighlight
      isOptionEqualToValue={isOptionEqualToValue}
      fieldValue={'_id'}
      loadValue
      fetchValueFunc={multiple ? ReasonForJobChangeService.search : ReasonForJobChangeService.getOne}
      id='select-job-change-reason'
      getOptionLabel={renderLabel}
      renderOption={renderOption}
      helperText={helperText}
    />
  );
};

export default memo(SelectReasonForJobInformationChanged);
