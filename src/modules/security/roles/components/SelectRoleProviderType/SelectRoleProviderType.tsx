import { FormFieldControlProps, FormSelectField } from '@dfl/mui-react-common';
import { MenuItem, SelectProps } from '@mui/material';
import { memo } from 'react';
import { ROLE_PROVIDER_TYPE_ENUM } from 'modules/security/roles/constants/role-provider.enum';
import { useTranslation } from 'react-i18next';

const SelectRoleProviderType = (props: FormFieldControlProps & SelectProps) => {
  const { t } = useTranslation('role');
  return (
    <FormSelectField {...props}>
      {Object.entries(ROLE_PROVIDER_TYPE_ENUM).map(([value, label]) => {
        return (
          <MenuItem key={value} value={value}>
            {t(`roleProviderType.${value}`)}
          </MenuItem>
        );
      })}
    </FormSelectField>
  );
};

export default memo(SelectRoleProviderType);
