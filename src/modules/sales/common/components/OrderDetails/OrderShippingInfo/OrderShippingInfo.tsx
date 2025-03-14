import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { DetailStack, DetailStackItemRecord, FlexBox, HandlerError } from '@dfl/mui-react-common';
import { PermissionCheck } from '@dfl/react-security';
import { Chip, Link } from '@mui/material';
import { IOrder } from 'modules/sales/common/interfaces/IOrder';
import { getFullName } from 'modules/sales/common/utils/shipping';
import { AddressValue } from 'modules/common/components/Address';
// import { useOrderContext } from 'modules/sales/common/contexts/OrderContext';
import OrderInfoSkeleton from './OrderInfoSkeleton';
import { OrderShippingEditButton } from './OrderShippingEdit';
import { FormPaper } from 'modules/common/components/FormPaper';
import { ORDER_PERMISSIONS } from 'modules/sales/common/constants/order-permissions';
import { OrderShippingValidate } from './OrderShippingValidate';
import { OrderShippingUserEditButton } from './OrderShippingUserEditButton';
import { useOrderContext } from 'modules/sales/common/contexts/OrderContext';
import { OrderShippingTypeCell } from '../../OrderShippingTypeCell';
import { OrderDeliveryTimeTypeCell } from '../../OrderDeliveryTimeTypeCell';
import { ORDER_TYPE_ENUM } from 'modules/sales/common/constants/order.enum';

type OrderShippingInfoProps = {
  isParent: boolean;
};
const OrderShippingInfo = ({ isParent }: OrderShippingInfoProps) => {
  const { t } = useTranslation('order');
  const { isLoading, order, error, orderType } = useOrderContext();

  if (isLoading) return <OrderInfoSkeleton />;

  if (error) {
    return (
      <FormPaper nm title={t('order:shipping.title')}>
        <HandlerError error={error} />
      </FormPaper>
    );
  }

  return (
    <FormPaper
      nm
      title={t('order:shipping.title')}
      actions={order?.shipping?.edited && <Chip label={t('order:shipping.edited')} color='warning' />}
    >
      <DetailStack details={details} data={order} />
      {isParent && (
        <PermissionCheck permissions={[ORDER_PERMISSIONS.ORDER_VALIDATE]}>
          {orderType === ORDER_TYPE_ENUM.PAID_ORDER && (
            <FlexBox gap={4} mt={3}>
              <>
                <OrderShippingEditButton order={order as IOrder} />
                <OrderShippingValidate order={order as IOrder} />
              </>
              {order?.shipping?.person?.contactId && (
                <OrderShippingUserEditButton owner={order?.shipping?.person?.contactId} />
              )}
            </FlexBox>
          )}
        </PermissionCheck>
      )}
    </FormPaper>
  );
};

export default memo(OrderShippingInfo);

const details: DetailStackItemRecord[] = [
  {
    label: 'common:name',
    translate: true,
    render: (order: IOrder) => order?.shipping?.person && getFullName(order?.shipping?.person),
  },
  {
    label: 'common:identityNumber',
    translate: true,
    render: (order: IOrder) => order?.shipping?.person?.identityNumber,
    hideEmpty: true,
  },
  {
    label: 'common:email',
    translate: true,
    render: (order: IOrder) =>
      order?.shipping?.person?.email && (
        <Link href={`mailto:${order?.shipping?.person?.email}`}>{order?.shipping?.person?.email}</Link>
      ),
  },
  {
    label: 'common:phone',
    translate: true,
    render: (order: IOrder) =>
      order?.shipping?.person?.phone && (
        <Link href={`tel:${order?.shipping?.person?.phone}`}>{order?.shipping?.person?.phone}</Link>
      ),
  },
  {
    label: 'common:address',
    translate: true,
    render: (order: IOrder) => <AddressValue value={order?.shipping.address} />,
  },
  {
    label: 'common:shippingNote.title',
    render: (order: IOrder) => order?.shipping?.note,
    translate: true,
    hideEmpty: true,
    forceMultiline: true,
  },
  {
    label: 'order:shipping.shippingType.title',
    translate: true,
    hideEmpty: true,
    render: (order: IOrder) =>
      order?.shipping?.shippingType && <OrderShippingTypeCell value={order?.shipping?.shippingType} />,
  },
  {
    label: 'order:shipping.deliveryTimeType.title',
    translate: true,
    hideEmpty: true,
    render: (order: IOrder) =>
      order?.shipping?.deliveryTimeType && (
        <OrderDeliveryTimeTypeCell value={order?.shipping?.deliveryTimeType as any} />
      ),
  },
];
