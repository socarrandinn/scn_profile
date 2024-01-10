import { FormFieldControlProps, FormSelectField } from '@dfl/mui-react-common';
import { MenuItem, SelectProps } from '@mui/material';
import { memo } from 'react';

export enum ROLE_PROVIDER_TYPE_ENUM {
  PRODUCT = 'Producto',
  LOGISTIC = 'Logistico',
  CARRIER = 'Transportista',
  MANUFACTURER = 'Fabricante',
}

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
