import { memo } from 'react';
import { FormAsyncSelectAutocompleteField } from '@dfl/mui-react-common';
import { Checkbox } from '@mui/material';
import { isOptionEqualToValue } from 'utils/comparing';
import { IConciliationAdjustmentCauses } from 'modules/sales/settings/conciliation-adjustment-causes/interfaces';
import { CONCILIATION_ADJUSTMENT_CAUSES_LIST_KEY } from 'modules/sales/settings/conciliation-adjustment-causes/constants';
import { ConciliationAdjustmentCausesService } from 'modules/sales/settings/conciliation-adjustment-causes/services';

type ConciliationAdjustmentCausesSelectProps = {
  name: string;
  required?: boolean;
  label?: string;
  placeholder?: string;
  helperText?: string;
  multiple?: boolean;
};

const renderLabel = (option: IConciliationAdjustmentCauses) => option.name || '';

const renderOption = (props: any, option: IConciliationAdjustmentCauses, { selected }: any) => {
  return (
    <li {...props} key={option._id as string}>
      <Checkbox style={{ marginRight: 8 }} checked={selected} />
      {option.name}
    </li>
  );
};

const ConciliationAdjustmentCausesSelect = ({ name, required, multiple, label, placeholder, helperText }: ConciliationAdjustmentCausesSelectProps) => {
  return (
    <FormAsyncSelectAutocompleteField
      multiple={multiple}
      required={required}
      label={label}
      name={name}
      disableCloseOnSelect={multiple}
      fetchFunc={ConciliationAdjustmentCausesService.search}
      queryKey={CONCILIATION_ADJUSTMENT_CAUSES_LIST_KEY}
      autoHighlight
      isOptionEqualToValue={isOptionEqualToValue}
      fieldValue={'_id'}
      loadValue
      fetchValueFunc={multiple ? ConciliationAdjustmentCausesService.search : ConciliationAdjustmentCausesService.getOne}
      id='select-conciliation-adjustment-causes'
      getOptionLabel={renderLabel}
      renderOption={renderOption}
      helperText={helperText}
    />
  );
};

export default memo(ConciliationAdjustmentCausesSelect);
