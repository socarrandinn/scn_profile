import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { CurrencyValue, DateValue, DetailStack, DetailStackItemRecord, HandlerError } from '@dfl/mui-react-common';
import { useOrderContext } from 'modules/sales/common/contexts/OrderContext';
import OrderInfoSkeleton from '../OrderShippingInfo/OrderInfoSkeleton';
import { FormPaper } from 'modules/common/components/FormPaper';
import { IOrder } from 'modules/sales/common/interfaces/IOrder';
import { OrderPaymentGateway } from '../../OrderPaymentGateway';
import { OrderPaymentMethod } from '../../OrderPaymentMethod';
import OrderPaymentPaidCell from '../../OrderPaymentPaidCell/OrderPaymentPaidCell';
import { ApplyRate } from 'utils/math';

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

  return (
    <FormPaper title={t('billing.information.title')}>
      <DetailStack details={gatewayDetails} data={order} />
    </FormPaper>
  );
};

export default memo(OrderPaymentInfo);

const gatewayDetails: DetailStackItemRecord[] = [
  {
    label: 'order:invoice.currency',
    translate: true,
    hideEmpty: true,
    render: (order: IOrder) => order?.invoice?.currency,
  },

  {
    label: 'order:invoice.changeRate',
    translate: true,
    hideEmpty: true,
    render: (order: IOrder) => order?.invoice?.changeRate ?? 1,
  },
  {
    label: 'order:invoice.total',
    translate: true,
    render: (order: IOrder) => (
      <CurrencyValue
        value={ApplyRate(order?.invoice?.total, order?.invoice?.changeRate)}
        currency={order?.invoice?.currency || 'USD'}
      />
    ),
  },
  {
    divider: true,
  },
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
    render: (order: IOrder) => <OrderPaymentPaidCell paid={order?.payment?.paid} />,
  },
  {
    label: 'order:invoice.details.payment.paidAt',
    translate: true,
    hideEmpty: true,
    render: (order: IOrder) =>
      order?.payment?.paidAt && <DateValue value={order?.payment?.paidAt} format='dd/MM/yyyy HH:mm:ss' />,
  },
  {
    label: 'order:invoice.details.payment.transactionId',
    translate: true,
    hideEmpty: true,
    render: (order: IOrder) => order?.payment?.transactionId,
  },
];
