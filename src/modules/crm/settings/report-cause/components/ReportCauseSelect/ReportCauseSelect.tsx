import { memo } from 'react';
import { FormAsyncSelectAutocompleteField } from '@dfl/mui-react-common';
import { Checkbox } from '@mui/material';
import { isOptionEqualToValue } from 'utils/comparing';
import { IReportCause } from 'modules/crm/settings/report-cause/interfaces';
import { REPORT_CAUSES_LIST_KEY } from 'modules/crm/settings/report-cause/constants';
import { ReportCauseService } from 'modules/crm/settings/report-cause/services';

type ReportCauseSelectProps = {
  name: string;
  required?: boolean;
  label?: string;
  placeholder?: string;
  helperText?: string;
  multiple?: boolean;
};

const renderLabel = (option: IReportCause) => option.name || '';

const renderOption = (props: any, option: IReportCause, { selected }: any) => {
  return (
    <li {...props} key={option._id as string}>
      <Checkbox style={{ marginRight: 8 }} checked={selected} />
      {option.name}
    </li>
  );
};

const ReportCauseSelect = ({ name, required, multiple, label, helperText, ...props }: ReportCauseSelectProps) => {
  return (
    <FormAsyncSelectAutocompleteField
      multiple={multiple}
      required={required}
      label={label}
      name={name}
      disableCloseOnSelect={multiple}
      fetchFunc={ReportCauseService.search}
      queryKey={REPORT_CAUSES_LIST_KEY}
      autoHighlight
      isOptionEqualToValue={isOptionEqualToValue}
      fieldValue={'_id'}
      loadValue
      fetchValueFunc={multiple ? ReportCauseService.search : ReportCauseService.getOne}
      id='select-report-cause'
      getOptionLabel={renderLabel}
      renderOption={renderOption}
      helperText={helperText}
    />
  );
};

export default memo(ReportCauseSelect);
