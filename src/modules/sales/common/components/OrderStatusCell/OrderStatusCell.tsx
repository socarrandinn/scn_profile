import { IStatus, StatusPicker } from '@dfl/mui-react-common';
import { memo } from 'react';
import useUpdateOrderStatus from '../../hooks/useOrderUpdateStatus';
import { IOrder } from '../../interfaces/IOrder';
import { IOrderStatus } from 'modules/sales/settings/order-status/interfaces';
import { useTranslateValue } from 'hooks/useTranslateValue';

type OrderStatusCellProps = {
  rowId: string;
  value: IOrderStatus;
  record: IOrder;
};

const OrderStatusCell = ({ record, rowId, value }: OrderStatusCellProps) => {
  const { mutateAsync, isLoading: loadingChange } = useUpdateOrderStatus(rowId, record?.code);

  const status = useCheckLocale(value as IStatus);

  if (!value) return <></>;

  return (
    <StatusPicker
      options={[]}
      readOnly={true}
      name='status'
      size={'small'}
      value={status}
      isLoading={loadingChange}
      onChange={(status: IStatus) => mutateAsync(status?._id)}
    />
  );
};

export default memo(OrderStatusCell);

const useCheckLocale = (value: IStatus): IStatus => {
  const { locale } = useTranslateValue();
  if (typeof value?.title !== 'string') {
    value = {
      ...value,
      title: value?.title?.[locale],
    };
  }
  return value;
};
