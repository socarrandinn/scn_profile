import { FormSelectField } from '@dfl/mui-react-common';
import { MenuItem } from '@mui/material';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import {
  OTHER_COST_OWNERSHIP_TYPE,
  OTHER_COST_OWNERSHIP_TYPE_VALUES,
} from 'modules/inventory/product/constants/product-other-cost.enum';

interface Props {
  dark?: boolean;
  fullWidth?: boolean;
  label?: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  readOnly?: boolean;
  size?: 'small' | 'medium';
  className?: string;
}

const FormSelectProviderType = ({ label, name, placeholder, className, size = 'medium', ...props }: Props) => {
  const { t } = useTranslation('provider');

  return (
    <FormSelectField
      {...props}
      size={size}
      name={name}
      label={label}
      placeholder={placeholder}
      disabled={props.readOnly}
      sx={{
        backgroundColor: props.readOnly ? '#e5e7eb' : 'inherit',
        fontWeight: props.readOnly ? 500 : 400,
      }}
    >
      {OTHER_COST_OWNERSHIP_TYPE_VALUES.map((type: OTHER_COST_OWNERSHIP_TYPE) => (
        <MenuItem key={type} value={type}>
          {t(type)}
        </MenuItem>
      ))}
    </FormSelectField>
  );
};

export default memo(FormSelectProviderType);
