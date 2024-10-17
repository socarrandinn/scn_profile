import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { DetailStack, DetailStackItemRecord, FlexBox, HandlerError } from '@dfl/mui-react-common';
import { PermissionCheck } from '@dfl/react-security';
import { Link } from '@mui/material';
import { IOrder } from 'modules/sales/common/interfaces/IOrder';
import { getFullName } from 'modules/sales/common/utils/shipping';
import { AddressValue } from 'modules/common/components/Address';
import { usePaidOrderContext } from 'modules/sales/paid-order/contexts/PaidOrderContext';
import OrderInfoSkeleton from './OrderInfoSkeleton';
import { OrderShippingEditButton } from './OrderShippingEdit';
import { FormPaper } from 'modules/common/components/FormPaper';
import { ORDER_PERMISSIONS } from 'modules/sales/common/constants/order-permissions';

const details: DetailStackItemRecord[] = [
  {
    label: 'common:name',
    translate: true,
    render: ({ shipping }: IOrder) => getFullName(shipping?.person),
  },
  {
    label: 'common:identityNumber',
    translate: true,
    render: ({ shipping }: IOrder) => shipping?.person?.identityNumber,
    hideEmpty: true,
  },
  {
    label: 'common:email',
    translate: true,
    render: ({ shipping }: IOrder) =>
      shipping?.person?.email && <Link href={`mailto:${shipping?.person?.email}`}>{shipping?.person?.email}</Link>,
  },
  {
    label: 'common:phone',
    translate: true,
    render: ({ shipping }: IOrder) =>
      shipping?.person?.phone && <Link href={`tel:${shipping?.person?.phone}`}>{shipping?.person?.phone}</Link>,
  },
  {
    label: 'common:address',
    translate: true,
    render: ({ shipping }: IOrder) => <AddressValue value={shipping.address} />,
  },
  {
    label: 'common:shippingNote.title',
    render: ({ shipping }: IOrder) => shipping?.note,
    translate: true,
    hideEmpty: true,
    forceMultiline: true,
  },
];

type OrderShippingInfoProps = {
  isParent: boolean;
};
const OrderShippingInfo = ({ isParent }: OrderShippingInfoProps) => {
  const { t } = useTranslation('order');
  const { isLoading, order, error } = usePaidOrderContext();

  if (isLoading) return <OrderInfoSkeleton />;

  if (error) {
    return (
      <FormPaper nm title={t('order:shipping.title')}>
        <HandlerError error={error} />
      </FormPaper>
    );
  }

  return (
    <FormPaper nm title={t('order:shipping.title')}>
      <DetailStack details={details} data={order} />
      {isParent && (
        <PermissionCheck permissions={[ORDER_PERMISSIONS.ORDER_VALIDATE]}>
          <FlexBox gap={4} mt={3}>
            <OrderShippingEditButton orderId={order?._id} data={order?.shipping} currentStatus={order?.status} />
            {/*  <OrderShippingInfoValidate orderId={data?._id} data={data?.shipping} currentStatus={data?.status} />
            <OrderShippingUserEditButton idShipping={data?.shipping?.id} owner={data?.owner?.id} /> */}
          </FlexBox>
        </PermissionCheck>
      )}
    </FormPaper>
  );
};

export default memo(OrderShippingInfo);
