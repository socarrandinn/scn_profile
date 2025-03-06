import { memo, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { Stack, styled } from '@mui/material';
import { CurrencyValue, DetailStack, DetailStackItemRecord, HandlerError } from '@dfl/mui-react-common';
import { FormPaper } from 'modules/common/components/FormPaper';
import OrderInfoSkeleton from '../OrderShippingInfo/OrderInfoSkeleton';
import { useOrderContext } from 'modules/sales/common/contexts/OrderContext';
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

        <OrderInvoiceTaxDetails onDetails={financialSummary}>
          <ContainerDetail>
            <DetailStack details={financialDetails} data={order} />
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
    label: 'order:invoice.currency',
    translate: true,
    hideEmpty: true,
    render: (order: IOrder) => order?.invoice?.currency,
  },
  {
    label: 'order:invoice.changeRate',
    translate: true,
    hideEmpty: true,
    render: (order: IOrder) => order?.invoice?.changeRate,
  },

  /* product */
  {
    label: 'order:invoice.details.products.value',
    translate: true,
    render: (order: IOrder) => (
      <CurrencyValue
        value={ApplyRate(order?.invoice?.details?.products?.value || 0, order?.invoice?.changeRate || 1)}
        currency={order?.invoice?.currency || 'USD'}
      />
    ),
  },
  {
    divider: true,
  },
];
const deliverySummary = (actions: ReactNode): DetailStackItemRecord[] => [
  {
    label: 'order:invoice.details.delivery.label',
    translate: true,
    render: (order: IOrder) => (
      <Stack gap={1} flexDirection={'row'} alignItems={'center'}>
        <CurrencyValue
          value={ApplyRate(order?.invoice?.details?.delivery?.value, order?.invoice?.changeRate)}
          currency={order?.invoice?.currency || 'USD'}
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
    render: (order: IOrder) => (
      <Stack gap={1} flexDirection={'row'} alignItems={'center'}>
        <CurrencyValue
          value={ApplyRate(order?.invoice?.details?.discount?.value, order?.invoice?.changeRate)}
          currency={order?.invoice?.currency || 'USD'}
        />
        {actions}
      </Stack>
    ),
  },
];

const financialSummary = (actions: ReactNode): DetailStackItemRecord[] => [
  {
    label: 'order:invoice.details.financial.title',
    translate: true,
    render: (order: IOrder) => (
      <Stack gap={1} flexDirection={'row'} alignItems={'center'}>
        <CurrencyValue
          value={ApplyRate(order?.invoice?.details?.financial?.value, order?.invoice?.changeRate)}
          currency={order?.invoice?.currency || 'USD'}
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
    label: 'order:invoice.total',
    translate: true,
    hideEmpty: true,
    render: (order: IOrder) => (
      <CurrencyValue
        value={ApplyRate(order?.invoice?.total, order?.invoice?.changeRate)}
        currency={order?.invoice?.currency}
      />
    ),
  },
];

const deliveryDetails: DetailStackItemRecord[] = [
  {
    label: 'order:invoice.details.delivery.base',
    translate: true,
    hideEmpty: true,
    render: (order: IOrder) => (
      <CurrencyValue value={order?.invoice?.details?.delivery?.base || 0} currency={order?.invoice?.currency} />
    ),
  },

  {
    divider: true,
  },
  {
    label: 'order:invoice.details.delivery.taxes.express',
    translate: true,
    hideEmpty: true,
    render: (order: IOrder) => (
      <CurrencyValue
        value={order?.invoice?.details?.delivery?.taxes?.express || 0}
        currency={order?.invoice?.currency}
      />
    ),
  },
  {
    label: 'order:invoice.details.delivery.taxes.fragile',
    translate: true,
    hideEmpty: true,
    render: (order: IOrder) => (
      <CurrencyValue
        value={order?.invoice?.details?.delivery?.taxes?.fragile || 0}
        currency={order?.invoice?.currency}
      />
    ),
  },
  {
    label: 'order:invoice.details.delivery.taxes.specialTransportation',
    translate: true,
    hideEmpty: true,
    render: (order: IOrder) => (
      <CurrencyValue
        value={order?.invoice?.details?.delivery?.taxes?.specialTransportation || 0}
        currency={order?.invoice?.currency}
      />
    ),
  },
  {
    label: 'order:invoice.details.delivery.taxes.volume',
    translate: true,
    hideEmpty: true,
    render: (order: IOrder) => (
      <CurrencyValue
        value={order?.invoice?.details?.delivery?.taxes?.volume || 0}
        currency={order?.invoice?.currency}
      />
    ),
  },
  {
    label: 'order:invoice.details.delivery.taxes.weight',
    translate: true,
    hideEmpty: true,
    render: (order: IOrder) => (
      <CurrencyValue
        value={order?.invoice?.details?.delivery?.taxes?.weight || 0}
        currency={order?.invoice?.currency}
      />
    ),
  },
  {
    divider: true,
  },
  {
    label: 'order:invoice.details.delivery.value',
    translate: true,
    hideEmpty: true,
    render: (order: IOrder) => (
      <CurrencyValue
        fontWeight={600}
        value={order?.invoice?.details?.delivery?.value || 0}
        currency={order?.invoice?.currency}
      />
    ),
  },
];

const financialDetails: DetailStackItemRecord[] = [
  {
    label: 'order:invoice.details.financial.value',
    translate: true,
    hideEmpty: true,
    render: (order: IOrder) => {
      console.log(order);
      return (
        <CurrencyValue value={order?.invoice?.details?.financial?.value || 0} currency={order?.invoice?.currency} />
      );
    },
  },
  {
    label: 'order:invoice.details.financial.valueRate',
    translate: true,
    hideEmpty: true,
    render: (order: IOrder) => (
      <CurrencyValue
        value={ApplyRate(
          order?.invoice?.details?.financial?.value,
          order?.invoice?.details?.financial?.taxes?.changeRate,
        )}
        currency={order?.invoice?.currency}
      />
    ),
  },
];

const getInvoiceDiscountStackItem = (order: IOrder) => {
  const discountOffers = order?.invoice?.details?.discount?.offers;

  const _items = discountOffers?.map((item) => ({
    label: (item?.offer?.name || item?.offer) as string,
    translate: true,
    hideEmpty: true,
    render: (order: IOrder) => (
      <CurrencyValue fontWeight={600} value={item?.discount || 0} currency={order?.invoice?.currency} />
    ),
  }));

  return _items;
};
