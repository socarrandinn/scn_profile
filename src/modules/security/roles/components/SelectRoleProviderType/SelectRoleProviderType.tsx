import { FormFieldControlProps, FormSelectField } from '@dfl/mui-react-common';
import { MenuItem, SelectProps } from '@mui/material';
import { memo } from 'react';
import { ROLE_PROVIDER_TYPE_ENUM } from '../../constants/role-provider.enum';

const SelectRoleProviderType = (props: FormFieldControlProps & SelectProps) => {
  return (
    <FormSelectField {...props}>
      {Object.entries(ROLE_PROVIDER_TYPE_ENUM).map(([value, label]) => {
        return (
          <MenuItem key={value} value={value}>
            {label}
          </MenuItem>
        );
      })}
    </FormSelectField>
  );
};

export default memo(SelectRoleProviderType);
