import { FormFieldControlProps, FormSelectField } from '@dfl/mui-react-common';
import { MenuItem, SelectProps } from '@mui/material';
import { memo } from 'react';
import { ROLE_PROVIDER_TYPE_ENUM } from '../../constants/role-provider.enum';
import { useTranslation } from 'react-i18next';

const getCustomLabel = (value: string): string => {
  const { t } = useTranslation('role');
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
  return (
    <FormSelectField {...props}>
      {Object.entries(ROLE_PROVIDER_TYPE_ENUM).map(([value, label]) => {
        return (
          <MenuItem key={value} value={value}>
            {getCustomLabel(value)}
          </MenuItem>
        );
      })}
    </FormSelectField>
  );
};

export default memo(SelectRoleProviderType);
