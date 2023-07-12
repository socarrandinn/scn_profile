import { memo } from 'react';
import { FormSelectAutocompleteField } from '@dfl/mui-react-common';
import { Checkbox } from '@mui/material';

import { useTranslation } from 'react-i18next';
import { CommonIntervalsEnumValues } from 'modules/store/employee/settings/time-off-policies/constants/interval.enum';

type SelectCommonIntervalProps = {
  name: string;
  required?: boolean;
  label?: string;
  placeholder?: string;
  helperText?: string;
  multiple?: boolean;
};

const SelectCommonInterval = ({
  name,
  required,
  multiple,
  label,
  placeholder,
  helperText,
}: SelectCommonIntervalProps) => {
  const { t } = useTranslation('timeOffType');
  const renderLabel = (option: string) => t(`commonInterval.${option}`);
  const renderOption = (props: any, option: string, { selected }: any) => {
    return (
      <li {...props} key={option}>
        <Checkbox style={{ marginRight: 8 }} checked={selected} />
        {t(`commonInterval.${option}`)}
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
      id='select-common-interval'
      getOptionLabel={renderLabel}
      renderOption={renderOption}
      options={CommonIntervalsEnumValues}
      helperText={helperText}
    />
  );
};

export default memo(SelectCommonInterval);
