import { memo, useMemo } from 'react';
import { FormSelectAutocompleteField } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import { ROLE_PROVIDER_TYPE_ENUM } from 'modules/security/roles/constants/role-provider.enum';

type SelectProviderTypeProps = {
  name: string;
  label: string;
  placeholder?: string;
  required?: boolean;
};

const isOptionEqualToValue = (option: any, value: any) => option === value;

const SelectProviderType = ({ label, name, required, placeholder }: SelectProviderTypeProps) => {
  const { t } = useTranslation('role');
  const options = useMemo(
    () => [ROLE_PROVIDER_TYPE_ENUM.LOGISTIC, ROLE_PROVIDER_TYPE_ENUM.PRODUCT],
    [ROLE_PROVIDER_TYPE_ENUM],
  );

  const renderOption = (props: any, option: string) => {
    return (
      <li {...props} key={option}>
        {t(option)}
      </li>
    );
  };

  return (
    <FormSelectAutocompleteField
      name={name}
      label={label}
      options={options}
      fullWidth
      getOptionLabel={(option: any) => t(option)}
      renderOption={renderOption}
      isOptionEqualToValue={isOptionEqualToValue}
      placeholder={placeholder}
      required={required}
    />
  );
};

export default memo(SelectProviderType);
