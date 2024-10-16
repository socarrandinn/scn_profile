import { IStatus, StatusPicker } from '@dfl/mui-react-common';
import { useSecurity } from '@dfl/react-security';
import { useTranslateValue } from 'hooks/useTranslateValue';
import { ORDER_STATUS_TYPE_ENUM } from 'modules/sales/settings/order-status/constants';
import { IOrderStatus } from 'modules/sales/settings/order-status/interfaces';
import { memo } from 'react';
import { useFindOrderStatusForUser } from '../../hooks/useOrderStatus';
import { IPaidOrder } from 'modules/sales/paid-order/interfaces';
import { isEmpty } from 'lodash/fp';
import useUpdateOrderStatus from '../../hooks/useOrderUpdateStatus';
type OrderStatusCellProps = {
  rowId: string;
  value: IOrderStatus;
  record: IPaidOrder;
};

const OrderStatusCell = ({ record, rowId, value: data }: OrderStatusCellProps) => {
  const { isLoading, isError, userStatus } = useFindOrderStatusForUser({
    currentType: data?.type as any,
    excludeTypes: [ORDER_STATUS_TYPE_ENUM.ERROR, ORDER_STATUS_TYPE_ENUM.CANCELED],
  });
  const { mutateAsync, isLoading: loadingChange } = useUpdateOrderStatus(rowId, record?.code);
  const { hasPermission } = useSecurity();
  const value = useCheckLocale(data as unknown as IStatus);

  return (
    <StatusPicker
      options={userStatus as IStatus[]}
      isError={isError}
      readOnly={
        isEmpty(userStatus) || !record?.code || (!hasPermission('ORDER_STATUS') && !hasPermission('SUBORDER_STATUS'))
      }
      name='status'
      size={'small'}
      value={value}
      isLoading={isLoading || loadingChange}
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
