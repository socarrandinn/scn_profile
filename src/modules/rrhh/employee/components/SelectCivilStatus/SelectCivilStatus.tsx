import { memo } from 'react';
import { FormSelectAutocompleteField } from '@dfl/mui-react-common';
import { Checkbox } from '@mui/material';

import { useTranslation } from 'react-i18next';
import { CivilStatusValues } from 'modules/rrhh/employee/constants/civil-status.enum';

type SelectCivilProps = {
  name: string;
  required?: boolean;
  label?: string;
  placeholder?: string;
  helperText?: string;
  multiple?: boolean;
};

const SelectCivilStatus = ({ name, required, multiple, label, placeholder, helperText }: SelectCivilProps) => {
  const { t } = useTranslation('employee');
  const renderLabel = (option: string) => t(`civilStatus.${option}`);
  const renderOption = (props: any, option: string, { selected }: any) => {
    return (
      <li {...props} key={option}>
        <Checkbox style={{ marginRight: 8 }} checked={selected} />
        {t(`civilStatus.${option}`)}
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
      id='select-civil-status'
      getOptionLabel={renderLabel}
      renderOption={renderOption}
      options={CivilStatusValues}
      helperText={helperText}
    />
  );
};

export default memo(SelectCivilStatus);
