import { memo } from 'react';
import { IOrder } from '../../interfaces/IOrder';
import { CurrencyValue } from '@dfl/mui-react-common';

type OrderInvoiceTotalCellProps = {
  value: number;
  record: IOrder;
};

const OrderInvoiceTotalCell = ({ value: total, record: order }: OrderInvoiceTotalCellProps) => {
  return <CurrencyValue fontWeight={600} value={total || 0} currency={order?.invoice?.currency} />;
};

export default memo(OrderInvoiceTotalCell);
