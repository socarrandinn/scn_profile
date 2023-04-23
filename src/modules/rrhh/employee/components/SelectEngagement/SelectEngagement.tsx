import { memo } from 'react';
import { FormSelectAutocompleteField } from '@dfl/mui-react-common';
import { Checkbox } from '@mui/material';

import { EngagementValues } from 'modules/rrhh/employee/constants';
import { useTranslation } from 'react-i18next';

type SelectEngagementProps = {
  name: string;
  required?: boolean;
  label?: string;
  placeholder?: string;
  helperText?: string;
  multiple?: boolean;
};

const SelectEngagement = ({ name, required, multiple, label, placeholder, helperText }: SelectEngagementProps) => {
  const { t } = useTranslation('employee');
  const renderLabel = (option: string) => t(option)
  const renderOption = (props: any, option: string, { selected }: any) => {
    return (
            <li {...props} key={option}>
                <Checkbox style={{ marginRight: 8 }} checked={selected}/>
                {t(option)}
            </li>
    );
  };
  return (
        <FormSelectAutocompleteField
            multiple={multiple}
            required={required}
            label={label}
            placeholder={placeholder}
            name={name}
            disableCloseOnSelect={multiple}
            autoHighlight
            id='select-employee'
            getOptionLabel={renderLabel}
            renderOption={renderOption}
            options={EngagementValues}
            helperText={helperText}
        />
  );
};

export default memo(SelectEngagement);
