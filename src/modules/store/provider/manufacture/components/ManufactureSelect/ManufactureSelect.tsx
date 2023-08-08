import { memo } from 'react';
import { FormAsyncSelectAutocompleteField } from '@dfl/mui-react-common';
import { Checkbox } from '@mui/material';
import { isOptionEqualToValue } from 'utils/comparing';
import { IManufacture } from 'modules/store/provider/manufacture/interfaces';
import { MANUFACTURES_LIST_KEY } from 'modules/store/provider/manufacture/constants';
import { ManufactureService } from 'modules/store/provider/manufacture/services';

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

const ManufactureSelect = ({ name, required, multiple, label, placeholder, helperText }: ManufactureSelectProps) => {
  return (
    <FormAsyncSelectAutocompleteField
      multiple={multiple}
      required={required}
      label={label}
      placeholder={placeholder}
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
    />
  );
};

export default memo(ManufactureSelect);
