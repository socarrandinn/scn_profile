import { Chip } from '@mui/material';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

type Props = {
  type: string;
};

const TYPE_COLOR: Record<string, 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' | undefined> = {
  WAREHOUSE: 'primary',
  CARRIER: 'secondary',
  MANUFACTURER: 'error',
  SUPPLIER: 'info',
  LOGISTIC: 'success',
  DISTRIBUTION_CENTER: 'warning',
};

const RoleTypeCell = ({ type }: Props) => {
  const { t } = useTranslation('role');

  if (!type) return null;

  return <Chip label={t(`roleProviderType.${type}`)} size={'small'} color={TYPE_COLOR[type]} />;
};

export default memo(RoleTypeCell);
