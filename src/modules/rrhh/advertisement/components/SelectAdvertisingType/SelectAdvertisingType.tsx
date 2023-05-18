import { memo } from 'react';
import { FormSelectAutocompleteField } from '@dfl/mui-react-common';
import { Checkbox } from '@mui/material';

import { useTranslation } from 'react-i18next';
import { ADVERTISEMENTS_TYPES_VALUES } from 'modules/rrhh/advertisement/constants/advertisement-types.constant';

type SelectAdvertisingTypeProps = {
  name: string;
  required?: boolean;
  label?: string;
  placeholder?: string;
  helperText?: string;
  multiple?: boolean;
};

const SelectAdvertisingType = ({
  name,
  required,
  multiple,
  label,
  placeholder,
  helperText,
}: SelectAdvertisingTypeProps) => {
  const { t } = useTranslation('advertisement');
  const renderLabel = (option: string) => t(`types.${option}`);
  const renderOption = (props: any, option: string, { selected }: any) => {
    return (
      <li {...props} key={option}>
        <Checkbox style={{ marginRight: 8 }} checked={selected} />
        {t(`types.${option}`)}
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
      id='select-advertising-type'
      getOptionLabel={renderLabel}
      renderOption={renderOption}
      options={ADVERTISEMENTS_TYPES_VALUES}
      helperText={helperText}
    />
  );
};

export default memo(SelectAdvertisingType);
