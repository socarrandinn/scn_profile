import { Chip } from '@mui/material';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
type Props = {
  operation: string;
};

const StockOperationCell = ({ operation }: Props) => {
  const { t } = useTranslation('stock');
  if (!operation) return <>-</>;
  return <Chip label={t(`operation.${operation}`)} variant='outlined' />;
};

export default memo(StockOperationCell);
