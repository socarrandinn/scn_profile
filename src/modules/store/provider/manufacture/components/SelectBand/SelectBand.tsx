import { memo } from 'react';
import { FormAsyncSelectAutocompleteField } from '@dfl/mui-react-common';
import { Checkbox } from '@mui/material';

import { ManufactureService } from 'modules/store/provider/manufacture/services';
import { MANUFACTURES_LIST_BAND } from 'modules/store/provider/manufacture/constants';

type SelectDiseasesProps = {
  name: string;
  required?: boolean;
  label?: string;
  placeholder?: string;
  helperText?: string;
  multiple?: boolean;
};

const SelectBand = ({ name, required, multiple, label, placeholder, helperText }: SelectDiseasesProps) => {
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
            multiple={multiple}
            required={required}
            label={label}
            placeholder={placeholder}
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
