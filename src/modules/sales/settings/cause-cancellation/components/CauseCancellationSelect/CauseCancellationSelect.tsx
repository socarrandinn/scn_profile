import { memo } from 'react';
import { FormAsyncSelectAutocompleteField } from '@dfl/mui-react-common';
import { Checkbox } from '@mui/material';
import { isOptionEqualToValue } from 'utils/comparing';
import { ICauseCancellation } from 'modules/sales/settings/cause-cancellation/interfaces';
import { CAUSE_CANCELLATIONS_LIST_KEY } from 'modules/sales/settings/cause-cancellation/constants';
import { CauseCancellationService } from 'modules/sales/settings/cause-cancellation/services';

type CauseCancellationSelectProps = {
  type: string;
  required?: boolean;
  label?: string;
  placeholder?: string;
  helperText?: string;
  multiple?: boolean;
};

const renderLabel = (option: ICauseCancellation) => option.type || '';

const renderOption = (props: any, option: ICauseCancellation, { selected }: any) => {
  return (
    <li {...props} key={option._id as string}>
      <Checkbox style={{ marginRight: 8 }} checked={selected} />
      {option.type}
    </li>
  );
};

const CauseCancellationSelect = ({
  type,
  required,
  multiple,
  label,
  helperText,
  ...props
}: CauseCancellationSelectProps) => {
  return (
    <FormAsyncSelectAutocompleteField
      {...props}
      multiple={multiple}
      required={required}
      label={label}
      name={type}
      disableCloseOnSelect={multiple}
      fetchFunc={CauseCancellationService.search}
      queryKey={CAUSE_CANCELLATIONS_LIST_KEY}
      autoHighlight
      isOptionEqualToValue={isOptionEqualToValue}
      fieldValue={'_id'}
      loadValue
      fetchValueFunc={multiple ? CauseCancellationService.search : CauseCancellationService.getOne}
      id='select-cause-cancellation'
      getOptionLabel={renderLabel}
      renderOption={renderOption}
      helperText={helperText}
    />
  );
};

export default memo(CauseCancellationSelect);
