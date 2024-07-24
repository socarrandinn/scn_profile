import { memo } from 'react';
import { FormAsyncSelectAutocompleteField } from '@dfl/mui-react-common';
import { Checkbox } from '@mui/material';

import { ManufactureService } from 'modules/inventory/provider/manufacture/services';
import { MANUFACTURES_LIST_BAND } from 'modules/inventory/provider/manufacture/constants';

type SelectDiseasesProps = {
  name: string;
  required?: boolean;
  label?: string;
  placeholder?: string;
  helperText?: string;
  multiple?: boolean;
};

const SelectBand = ({ name, required, multiple, label, helperText, ...props }: SelectDiseasesProps) => {
  const renderLabel = (option: string) => option;
  const renderOption = (props: any, option: string, { selected }: any) => {
    return (
      <li {...props} key={option}>
        <Checkbox style={{ marginRight: 8 }} checked={selected} />
        {option}
      </li>
    );
  };
  return (
    <FormAsyncSelectAutocompleteField
      {...props}
      multiple={multiple}
      required={required}
      label={label}
      name={name}
      disableCloseOnSelect={multiple}
      fetchFunc={ManufactureService.searchInclude}
      queryKey={MANUFACTURES_LIST_BAND}
      autoHighlight
      id='select-band'
      getOptionLabel={renderLabel}
      renderOption={renderOption}
      helperText={helperText}
    />
  );
};

export default memo(SelectBand);
