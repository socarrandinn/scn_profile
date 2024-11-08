import { memo } from 'react';
import { STOCK_OPERATIONS } from '../../constants/stock-operations.constants';
import { useTranslation } from 'react-i18next';
type OperationCellProps = {
  value: STOCK_OPERATIONS;
};

const OperationCell = ({ value }: OperationCellProps) => {
  const { t } = useTranslation('stock');
  return <>{t(`operation.${value}`)}</>;
};

export default memo(OperationCell);
