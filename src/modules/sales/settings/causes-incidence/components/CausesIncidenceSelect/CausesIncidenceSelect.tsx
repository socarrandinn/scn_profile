import { memo } from 'react';
import { FormAsyncSelectAutocompleteField } from '@dfl/mui-react-common';
import { Checkbox } from '@mui/material';
import { isOptionEqualToValue } from 'utils/comparing';
import { ICausesIncidence } from 'modules/sales/settings/causes-incidence/interfaces';
import { CAUSES_INCIDENCES_LIST_KEY } from 'modules/sales/settings/causes-incidence/constants';
import { CausesIncidenceService } from 'modules/sales/settings/causes-incidence/services';

type CausesIncidenceSelectProps = {
  name: string;
  required?: boolean;
  label?: string;
  placeholder?: string;
  helperText?: string;
  multiple?: boolean;
};

const renderLabel = (option: ICausesIncidence) => option.name as unknown as string || '';

const renderOption = (props: any, option: ICausesIncidence, { selected }: any) => {
  return (
    <li {...props} key={option._id as string}>
      <Checkbox style={{ marginRight: 8 }} checked={selected} />
      {option.name}
    </li>
  );
};

const CausesIncidenceSelect = ({
  name,
  required,
  multiple,
  label,
  helperText,
  ...props
}: CausesIncidenceSelectProps) => {
  return (
    <FormAsyncSelectAutocompleteField
      {...props}
      multiple={multiple}
      required={required}
      label={label}
      name={name}
      disableCloseOnSelect={multiple}
      fetchFunc={CausesIncidenceService.search}
      queryKey={CAUSES_INCIDENCES_LIST_KEY}
      autoHighlight
      isOptionEqualToValue={isOptionEqualToValue}
      fieldValue={'_id'}
      loadValue
      fetchValueFunc={multiple ? CausesIncidenceService.search : CausesIncidenceService.getOne}
      id='select-causes-incidence'
      getOptionLabel={renderLabel}
      renderOption={renderOption}
      helperText={helperText}
    />
  );
};

export default memo(CausesIncidenceSelect);
