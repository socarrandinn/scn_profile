import { FormFieldControlProps, FormSelectField } from '@dfl/mui-react-common';
import { MenuItem, SelectProps } from '@mui/material';
import { memo } from 'react';
import { ROLE_PROVIDER_TYPE_ENUM } from 'modules/security/roles/constants/role-provider.enum';
import { useTranslation } from 'react-i18next';

export const getCustomLabel = (value: string, t: (namespace: string) => string): string => {
  switch (value) {
    case ROLE_PROVIDER_TYPE_ENUM.PRODUCT:
      return t('roleProviderProduct');
    case ROLE_PROVIDER_TYPE_ENUM.LOGISTIC:
      return t('roleProviderLogistic');
    case ROLE_PROVIDER_TYPE_ENUM.CARRIER:
      return t('roleProviderCarrier');
    case ROLE_PROVIDER_TYPE_ENUM.MANUFACTURER:
      return t('roleProviderManufacturer');
    default:
      return value;
  }
};

const SelectRoleProviderType = (props: FormFieldControlProps & SelectProps) => {
  const { t } = useTranslation('role');
  return (
    <FormSelectField {...props}>
      {Object.entries(ROLE_PROVIDER_TYPE_ENUM).map(([value, label]) => {
        return (
          <MenuItem key={value} value={value}>
            {getCustomLabel(value, t)}
          </MenuItem>
        );
      })}
    </FormSelectField>
  );
};

export default memo(SelectRoleProviderType);
