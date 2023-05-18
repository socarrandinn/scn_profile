import { memo } from 'react';
import { FormSelectAutocompleteField } from '@dfl/mui-react-common';
import { Checkbox } from '@mui/material';

import { useTranslation } from 'react-i18next';
import { ADVERTISEMENTS_AUDIENCE_VALUES } from 'modules/rrhh/advertisement/constants/advertisement-audience.constant';

type SelectAdvertisingAudienceProps = {
  name: string;
  required?: boolean;
  label?: string;
  placeholder?: string;
  helperText?: string;
  multiple?: boolean;
};

const SelectAdvertisingAudience = ({
  name,
  required,
  multiple,
  label,
  placeholder,
  helperText,
}: SelectAdvertisingAudienceProps) => {
  const { t } = useTranslation('advertisement');
  const renderLabel = (option: string) => t(`audiences.${option}`);
  const renderOption = (props: any, option: string, { selected }: any) => {
    return (
      <li {...props} key={option}>
        <Checkbox style={{ marginRight: 8 }} checked={selected} />
        {t(`audiences.${option}`)}
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
      id='select-advertising-audience'
      getOptionLabel={renderLabel}
      renderOption={renderOption}
      options={ADVERTISEMENTS_AUDIENCE_VALUES}
      helperText={helperText}
    />
  );
};

export default memo(SelectAdvertisingAudience);
