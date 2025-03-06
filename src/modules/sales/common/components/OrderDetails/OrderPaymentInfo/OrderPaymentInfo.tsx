import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { DateValue, DetailStack, DetailStackItemRecord, HandlerError } from '@dfl/mui-react-common';
import { useOrderContext } from 'modules/sales/common/contexts/OrderContext';
import OrderInfoSkeleton from '../OrderShippingInfo/OrderInfoSkeleton';
import { FormPaper } from 'modules/common/components/FormPaper';
import { IOrder } from 'modules/sales/common/interfaces/IOrder';
import { OrderPaymentGateway } from '../../OrderPaymentGateway';
import OrderPaymentPaidChip from '../../OrderPaymentPaidChip/OrderPaymentPaidChip';
import { OrderPaymentMethod } from '../../OrderPaymentMethod';

const OrderPaymentInfo = () => {
  const { t } = useTranslation('order');
  const { isLoading, order, error } = useOrderContext();

  if (isLoading) return <OrderInfoSkeleton row={2} />;

  if (error) {
    return (
      <FormPaper nm title={t('invoice.title')}>
        <HandlerError error={error} />
      </FormPaper>
    );
  }

  if (isLoading) return <OrderInfoSkeleton />;

  if (error) {
    return (
      <FormPaper title={t('billing.information.title')}>
        <HandlerError error={error} />
      </FormPaper>
    );
  }

  return (
    <FormPaper title={t('billing.information.title')}>
      <DetailStack details={gatewayDetails} data={order} />
    </FormPaper>
  );
};

export default memo(OrderPaymentInfo);

const gatewayDetails: DetailStackItemRecord[] = [
  {
    label: 'order:invoice.details.payment.paymentMethod',
    translate: true,
    hideEmpty: true,
    render: (order: IOrder) =>
      order?.payment?.paymentMethod && <OrderPaymentMethod value={order?.payment?.paymentMethod} />,
  },
  {
    label: 'order:invoice.details.payment.gateway',
    translate: true,
    hideEmpty: true,
    render: (order: IOrder) => <OrderPaymentGateway value={order?.payment?.gateway} />,
  },
  {
    label: 'order:invoice.details.payment.paid',
    translate: true,
    hideEmpty: true,
    render: (order: IOrder) => <OrderPaymentPaidChip paid={order?.payment?.paid} />,
  },
  {
    label: 'order:invoice.details.payment.paidAt',
    translate: true,
    hideEmpty: true,
    render: (order: IOrder) => order?.payment?.paidAt && <DateValue value={order?.payment?.paidAt} />,
  },
  {
    label: 'order:invoice.details.payment.transactionId',
    translate: true,
    hideEmpty: true,
    render: (order: IOrder) => order?.payment?.transactionId,
  },
];
