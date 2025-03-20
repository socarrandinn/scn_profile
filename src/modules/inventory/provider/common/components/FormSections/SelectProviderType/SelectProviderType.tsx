import { memo, useMemo } from 'react';
import { FormSelectAutocompleteField } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import { PROVIDER_TYPE_ENUM } from 'modules/inventory/provider/common/constants';

type SelectProviderTypeProps = {
  name: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
};

const isOptionEqualToValue = (option: any, value: any) => option === value;

const SelectProviderType = ({ label, name, required = false, disabled = false, ...props }: SelectProviderTypeProps) => {
  const { t } = useTranslation('role');
  const options = useMemo(() => [PROVIDER_TYPE_ENUM.LOGISTIC, PROVIDER_TYPE_ENUM.SUPPLIER], []);

  const renderOption = (props: any, option: string) => {
    return (
      <li {...props} key={option}>
        {t(`roleProviderType.${option}`)}
      </li>
    );
  };

  return (
    <FormSelectAutocompleteField
      {...props}
      name={name}
      label={label}
      options={options}
      fullWidth
      getOptionLabel={(option: any) => t(`roleProviderType.${option as string}`)}
      renderOption={renderOption}
      isOptionEqualToValue={isOptionEqualToValue}
      required={required}
      disabled={disabled}
    />
  );
};

export default memo(SelectProviderType);
