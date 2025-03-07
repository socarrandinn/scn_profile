import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from '@mui/material';
import { DetailStack, DetailStackItemRecord, HandlerError } from '@dfl/mui-react-common';
import { useOrderContext } from 'modules/sales/common/contexts/OrderContext';
import OrderClientInfoSkeleton from './OrderClientInfoSkeleton';
import { FormPaper } from 'modules/common/components/FormPaper';
import { IOrder } from 'modules/sales/common/interfaces/IOrder';

const OrderClientInfo = () => {
  const { t } = useTranslation('order');
  const { isLoading, order, error } = useOrderContext();

  if (isLoading) return <OrderClientInfoSkeleton />;

  if (error) {
    return (
      <FormPaper title={t('billing.billingClient.title')}>
        <HandlerError error={error} />
      </FormPaper>
    );
  }

  return (
    <FormPaper title={t('billing.billingClient.title')}>
      <DetailStack details={details} data={order} />
    </FormPaper>
  );
};

export default memo(OrderClientInfo);

export const details: DetailStackItemRecord[] = [
  {
    label: 'common:name',
    translate: true,
    render: (value: IOrder) => value?.client?.fullName,
  },

  {
    label: 'common:email',
    translate: true,
    forceMultiline: true,
    render: (value: IOrder) =>
      value?.client?.email && <Link href={`mailto:${value?.client?.email}`}>{value?.client?.email}</Link>,
  },
  {
    label: 'common:phone',
    translate: true,
    hideEmpty: true,
    render: (value: IOrder) =>
      value?.client?.phone && <Link href={`tel:${value?.client?.phone}`}>{value?.client?.phone}</Link>,
  },
  {
    divider: true,
  },
  {
    label: 'order:device.ip',
    translate: true,
    hideEmpty: true,
    render: (value: IOrder) => value?.device?.ip,
  },
  {
    label: 'order:device.device.type',
    translate: true,
    hideEmpty: true,
    render: (value: IOrder) => value?.device?.device?.type,
  },
  {
    label: 'order:device.client.name',
    translate: true,
    hideEmpty: true,
    render: (value: IOrder) =>
      value?.device?.client?.name + (value?.device?.client?.version ? ` (${value?.device?.client?.version})` : ''),
  },
];
