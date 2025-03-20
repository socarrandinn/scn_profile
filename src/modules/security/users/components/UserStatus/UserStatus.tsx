import { memo } from 'react';
import { Chip } from '@mui/material';
import { useTranslation } from 'react-i18next';

type UserStatusProps = {
  value: string;
};

const STATUS_COLOR: Record<string, 'primary' | 'error' | 'success' | 'warning' | undefined> = {
  ACTIVE: 'success',
  LOCK: 'error',
  DELETED: 'error',
  UNVERIFIED: 'warning',
  CANCELED: 'error',
  PENDING: 'warning',
  ACCEPTED: 'success',
};

const UserStatus = ({ value }: UserStatusProps) => {
  const { t } = useTranslation('users');
  return <Chip label={t(`statusName.${value}`)} size={'small'} color={STATUS_COLOR[value]} />;
};

export default memo(UserStatus);
