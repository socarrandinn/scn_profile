import { memo } from 'react';
import { Chip } from '@mui/material';
import { useTranslation } from 'react-i18next';

type Props = { value: string };

const STATUS_COLOR: Record<string, 'primary' | 'error' | 'success' | 'warning' | 'info' | undefined> = {
  ACTIVE: 'primary',
  SCHEDULED: 'warning',
  FINISHED: 'info',
  DISABLED: 'error',
};

const ProductDiscountStatusCell = ({ value }: Props) => {
  const { t } = useTranslation('productDiscount');

  if (!value) return <>-</>;

  return <Chip variant='outlined' label={t(`status.${value}`)} size={'medium'} color={STATUS_COLOR[value]} sx={{ px: 1 }} />;
};

export default memo(ProductDiscountStatusCell);
