import { memo } from 'react';
import { FormAsyncSelectAutocompleteField } from '@dfl/mui-react-common';
import { Checkbox } from '@mui/material';
import { isOptionEqualToValue } from 'utils/comparing';
import { IDispatch } from 'modules/sales/dispatch/interfaces';
import { DISPATCHES_LIST_KEY } from 'modules/sales/dispatch/constants';
import { DispatchService } from 'modules/sales/dispatch/services';

type DispatchSelectProps = {
  name: string;
  required?: boolean;
  label?: string;
  placeholder?: string;
  helperText?: string;
  multiple?: boolean;
};

const renderLabel = (option: IDispatch) => option.name || '';

const renderOption = (props: any, option: IDispatch, { selected }: any) => {
  return (
    <li {...props} key={option._id as string}>
      <Checkbox style={{ marginRight: 8 }} checked={selected} />
      {option.name}
    </li>
  );
};

const DispatchSelect = ({ name, required, multiple, label, placeholder, helperText }: DispatchSelectProps) => {
  return (
    <FormAsyncSelectAutocompleteField
      multiple={multiple}
      required={required}
      label={label}
      name={name}
      disableCloseOnSelect={multiple}
      fetchFunc={DispatchService.search}
      queryKey={DISPATCHES_LIST_KEY}
      autoHighlight
      isOptionEqualToValue={isOptionEqualToValue}
      fieldValue={'_id'}
      loadValue
      fetchValueFunc={multiple ? DispatchService.search : DispatchService.getOne}
      id='select-dispatch'
      getOptionLabel={renderLabel}
      renderOption={renderOption}
      helperText={helperText}
    />
  );
};

export default memo(DispatchSelect);
