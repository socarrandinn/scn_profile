import { memo } from 'react';
import { FetchOption, FormAsyncSelectAutocompleteField } from '@dfl/mui-react-common';
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
  fetchOption?: FetchOption;
  multiple?: boolean;
};

const renderLabel = (option: ICausesIncidence) => (option?.name as unknown as string) || '';

const renderOption = (props: any, option: ICausesIncidence, { selected }: any) => {
  return (
    <li {...props} key={option?._id as string}>
      <Checkbox style={{ marginRight: 8 }} checked={selected} />
      {option?.name}
    </li>
  );
};

const CausesIncidenceCustomSelect = ({
  name,
  required,
  multiple,
  label,
  fetchOption,
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
      fetchFunc={CausesIncidenceService.searchClean}
      queryKey={CAUSES_INCIDENCES_LIST_KEY + name}
      autoHighlight
      isOptionEqualToValue={isOptionEqualToValue}
      fetchValueFunc={multiple ? CausesIncidenceService.searchClean : CausesIncidenceService.getOne}
      id={`select-incidence-${name}`}
      getOptionLabel={renderLabel}
      renderOption={renderOption}
      helperText={helperText}
      fetchOption={fetchOption}
    />
  );
};

export default memo(CausesIncidenceCustomSelect);
