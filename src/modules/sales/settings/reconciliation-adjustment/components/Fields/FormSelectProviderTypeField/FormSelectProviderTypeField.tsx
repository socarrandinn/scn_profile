import { FormSelectAutocompleteField } from '@dfl/mui-react-common';
import { PROVIDER_TYPE_ENUM } from 'modules/inventory/provider/common/constants';
import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

interface ISelectProductTagsProps {
  name: string;
  label?: string;
  helperText?: string;
  size?: 'medium' | 'small';
  required?: boolean;
}

const FormSelectProviderTypeField = ({
  name,
  label,
  helperText,
  size = 'medium',
  required = false,
}: ISelectProductTagsProps) => {
  const { t } = useTranslation('reconciliationAdjustment');

  const options = useMemo(() => Object.keys(PROVIDER_TYPE_ENUM), []);

  const renderLabel = (option: string) => t(`collection:type.${option}`);

  const renderOption = (props: any, option: string) => {
    return (
      <li {...props} key={option}>
        {t(`collection:type:${option}`)}
      </li>
    );
  };

  return (
    <FormSelectAutocompleteField
      required={required}
      name={name}
      autoComplete
      includeInputInList={true}
      options={options}
      label={t(label || '')}
      isOptionEqualToValue={(option, value) => option === value}
      size={size}
      helperText={helperText}
      disableClearable={true}
      fullWidth
      id='select-provider-type'
      getOptionLabel={renderLabel}
      renderOption={renderOption}
    />
  );
};

export default memo(FormSelectProviderTypeField);
