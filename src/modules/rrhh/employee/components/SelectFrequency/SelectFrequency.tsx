import { memo } from 'react';
import { FormSelectAutocompleteField } from '@dfl/mui-react-common';
import { Checkbox } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { FrequencyValues } from 'modules/rrhh/employee/constants/compensation';

type FrequencyProps = {
  name: string;
  required?: boolean;
  label?: string;
  placeholder?: string;
  helperText?: string;
  multiple?: boolean;
};

const SelectFrequency = ({ name, required, multiple, label, placeholder, helperText }: FrequencyProps) => {
  const { t } = useTranslation('employee');
  const renderLabel = (option: string) => t(`fields.compensation.${option}`);
  const renderOption = (props: any, option: string, { selected }: any) => {
    return (
            <li {...props} key={option}>
                <Checkbox style={{ marginRight: 8 }} checked={selected}/>
                {t(`fields.compensation.${option}`)}
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
            id='select-frequency'
            getOptionLabel={renderLabel}
            renderOption={renderOption}
            options={FrequencyValues}
            helperText={helperText}
        />
  );
};

export default memo(SelectFrequency);
