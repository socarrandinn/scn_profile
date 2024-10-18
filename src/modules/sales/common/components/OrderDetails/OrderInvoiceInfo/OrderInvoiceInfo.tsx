import { memo, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { Stack, styled } from '@mui/material';
import { CurrencyValue, DetailStack, DetailStackItemRecord, HandlerError } from '@dfl/mui-react-common';
import { FormPaper } from 'modules/common/components/FormPaper';
import OrderInfoSkeleton from '../OrderShippingInfo/OrderInfoSkeleton';
import { usePaidOrderContext } from 'modules/sales/paid-order/contexts/PaidOrderContext';
import { ApplyRate } from 'utils/math';
import { IOrder } from 'modules/sales/common/interfaces/IOrder';
import OrderInvoiceTaxDetails from './OrderInvoiceTaxDetails';

const ContainerDetail = styled(Stack)(({ theme }) => ({
  padding: 8,
  margin: '8px 0',
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: 8,
}));

const OrderInvoiceInfo = () => {
  const { t } = useTranslation('order');
  const { isLoading, order, error } = usePaidOrderContext();

  if (isLoading) return <OrderInfoSkeleton row={2} />;

  if (error) {
    return (
      <FormPaper nm title={t('order.client')}>
        <HandlerError error={error} />
      </FormPaper>
    );
  }

  return (
    <Stack>
      <FormPaper nm title={t('invoice.title')}>
        <DetailStack p={0} details={productsSummary} data={order} />

        <OrderInvoiceTaxDetails onDetails={deliverySummary}>
          <ContainerDetail>
            <DetailStack details={deliveryDetails} data={order} />
          </ContainerDetail>
        </OrderInvoiceTaxDetails>

        <OrderInvoiceTaxDetails onDetails={discountSummary}>
          <ContainerDetail>
            <DetailStack details={getInvoiceDiscountStackItem(order as IOrder) || []} data={order} />
          </ContainerDetail>
        </OrderInvoiceTaxDetails>
        <DetailStack p={0} details={restDetails} data={order} />
      </FormPaper>
    </Stack>
  );
};

export default memo(OrderInvoiceInfo);

const productsSummary: DetailStackItemRecord[] = [
  {
    label: 'order:invoice.details.products.value',
    translate: true,
    render: ({ invoice }: IOrder) => (
      <CurrencyValue
        value={ApplyRate(invoice?.details?.products?.value || 0, invoice?.changeRate || 1)}
        currency={invoice?.currency || 'USD'}
      />
    ),
  },
];
const deliverySummary = (actions: ReactNode): DetailStackItemRecord[] => [
  {
    label: 'order:invoice.details.delivery.label',
    translate: true,

    render: ({ invoice }: IOrder) => (
      <Stack gap={1} flexDirection={'row'} alignItems={'center'}>
        <CurrencyValue
          value={ApplyRate(invoice?.details?.delivery?.value || 0, invoice?.changeRate || 1)}
          currency={invoice?.currency || 'USD'}
        />
        {actions}
      </Stack>
    ),
  },
];

const discountSummary = (actions: ReactNode): DetailStackItemRecord[] => [
  {
    label: 'order:invoice.details.discount.value',
    translate: true,
    render: ({ invoice }: IOrder) => (
      <Stack gap={1} flexDirection={'row'} alignItems={'center'}>
        <CurrencyValue
          value={ApplyRate(invoice?.details?.discount?.value || 0, invoice?.changeRate || 1)}
          currency={invoice?.currency || 'USD'}
        />
        {actions}
      </Stack>
    ),
  },
];
const restDetails: DetailStackItemRecord[] = [
  {
    divider: true,
  },
  {
    label: 'order:invoice.changeRate',
    translate: true,
    hideEmpty: true,
    render: ({ invoice }: IOrder) => invoice?.changeRate,
  },
  {
    divider: true,
  },
  {
    label: 'order:invoice.total',
    translate: true,
    hideEmpty: true,
    render: ({ invoice }: IOrder) => (
      <CurrencyValue value={ApplyRate(invoice?.total || 0, invoice?.changeRate || 1)} currency={invoice?.currency} />
    ),
  },
];

const deliveryDetails: DetailStackItemRecord[] = [
  {
    label: 'order:invoice.details.delivery.base',
    translate: true,
    hideEmpty: true,
    render: ({ invoice }: IOrder) => (
      <CurrencyValue value={invoice?.details?.delivery?.base || 0} currency={invoice?.currency} />
    ),
  },

  {
    divider: true,
  },
  {
    label: 'order:invoice.details.delivery.taxes.express',
    translate: true,
    hideEmpty: true,
    render: ({ invoice }: IOrder) => (
      <CurrencyValue value={invoice?.details?.delivery?.taxes?.express || 0} currency={invoice?.currency} />
    ),
  },
  {
    label: 'order:invoice.details.delivery.taxes.fragile',
    translate: true,
    hideEmpty: true,
    render: ({ invoice }: IOrder) => (
      <CurrencyValue value={invoice?.details?.delivery?.taxes?.fragile || 0} currency={invoice?.currency} />
    ),
  },
  {
    label: 'order:invoice.details.delivery.taxes.specialTransportation',
    translate: true,
    hideEmpty: true,
    render: ({ invoice }: IOrder) => (
      <CurrencyValue
        value={invoice?.details?.delivery?.taxes?.specialTransportation || 0}
        currency={invoice?.currency}
      />
    ),
  },
  {
    label: 'order:invoice.details.delivery.taxes.volume',
    translate: true,
    hideEmpty: true,
    render: ({ invoice }: IOrder) => (
      <CurrencyValue value={invoice?.details?.delivery?.taxes?.volume || 0} currency={invoice?.currency} />
    ),
  },
  {
    label: 'order:invoice.details.delivery.taxes.weight',
    translate: true,
    hideEmpty: true,
    render: ({ invoice }: IOrder) => (
      <CurrencyValue value={invoice?.details?.delivery?.taxes?.weight || 0} currency={invoice?.currency} />
    ),
  },
  {
    divider: true,
  },
  {
    label: 'order:invoice.details.delivery.value',
    translate: true,
    hideEmpty: true,
    render: ({ invoice }: IOrder) => (
      <CurrencyValue fontWeight={600} value={invoice?.details?.delivery?.value || 0} currency={invoice?.currency} />
    ),
  },
];

const getInvoiceDiscountStackItem = (order: IOrder) => {
  const discountOffers = order?.invoice?.details?.discount?.offers;

  const _items = discountOffers?.map((item) => ({
    label: 'order:invoice.details.delivery.value',
    translate: true,
    hideEmpty: true,
    render: ({ invoice }: IOrder) => (
      <CurrencyValue fontWeight={600} value={invoice?.details?.delivery?.value || 0} currency={invoice?.currency} />
    ),
  }));

  return _items;
};
