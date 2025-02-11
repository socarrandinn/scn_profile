import { FormFieldControlProps, FormSelectField } from '@dfl/mui-react-common';
import { MenuItem, SelectProps } from '@mui/material';
import { PROVIDER_TYPE_ENUM } from 'modules/inventory/provider/common/constants';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

const SelectRoleProviderType = (props: FormFieldControlProps & SelectProps) => {
  const { t } = useTranslation('role');
  return (
    <FormSelectField {...props} key={'provider-type' + props.value}>
      {Object.entries(PROVIDER_TYPE_ENUM).map(([value, label]) => {
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
