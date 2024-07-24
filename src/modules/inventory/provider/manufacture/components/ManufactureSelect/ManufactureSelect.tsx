import { memo } from 'react';
import { FormAsyncSelectAutocompleteField } from '@dfl/mui-react-common';
import { Checkbox } from '@mui/material';
import { isOptionEqualToValue } from 'utils/comparing';
import { IManufacture } from 'modules/inventory/provider/manufacture/interfaces';
import { MANUFACTURES_LIST_KEY } from 'modules/inventory/provider/manufacture/constants';
import { ManufactureService } from 'modules/inventory/provider/manufacture/services';

type ManufactureSelectProps = {
  name: string;
  required?: boolean;
  label?: string;
  placeholder?: string;
  helperText?: string;
  multiple?: boolean;
};

const renderLabel = (option: IManufacture) => option.name || '';

const renderOption = (props: any, option: IManufacture, { selected }: any) => {
  return (
    <li {...props} key={option._id as string}>
      <Checkbox style={{ marginRight: 8 }} checked={selected} />
      {option.name}
    </li>
  );
};

const ManufactureSelect = ({ name, required, multiple, label, helperText, ...props }: ManufactureSelectProps) => {
  return (
    <FormAsyncSelectAutocompleteField
      {...props}
      multiple={multiple}
      required={required}
      label={label}
      name={name}
      disableCloseOnSelect={multiple}
      fetchFunc={ManufactureService.search}
      queryKey={MANUFACTURES_LIST_KEY}
      autoHighlight
      isOptionEqualToValue={isOptionEqualToValue}
      fieldValue={'_id'}
      loadValue
      fetchValueFunc={multiple ? ManufactureService.search : ManufactureService.getOne}
      id='select-manufacture'
      getOptionLabel={renderLabel}
      renderOption={renderOption}
      helperText={helperText}
      size='medium'
    />
  );
};

export default memo(ManufactureSelect);
