import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Divider, Link } from '@mui/material';
import { DetailStack, DetailStackItemRecord, HandlerError } from '@dfl/mui-react-common';
import { usePaidOrderContext } from 'modules/sales/paid-order/contexts/PaidOrderContext';
import OrderClientInfoSkeleton from './OrderClientInfoSkeleton';
import { FormPaper } from 'modules/common/components/FormPaper';
import { IBilling } from 'modules/sales/common/interfaces/IOrder';
import { getFullName } from 'modules/sales/common/utils/shipping';

export const details: DetailStackItemRecord[] = [
  {
    label: 'common:name',
    translate: true,
    render: (value: IBilling) => value?.billingClient && getFullName(value?.billingClient),
  },
  {
    label: 'common:idNumber',
    translate: true,
    render: (value: IBilling) => value?.billingClient?.identityNumber,
    hideEmpty: true,
  },
  {
    label: 'common:email',
    translate: true,
    forceMultiline: true,
    render: (value: IBilling) =>
      value?.billingClient?.email && (
        <Link href={`mailto:${value?.billingClient?.email}`}>{value?.billingClient?.email}</Link>
      ),
  },
  {
    label: 'common:phone',
    translate: true,
    hideEmpty: true,
    render: (value: IBilling) =>
      value?.billingClient?.phone && (
        <Link href={`tel:${value?.billingClient?.phone}`}>{value?.billingClient?.phone}</Link>
      ),
  },
  /* {
    label: 'common:address',
    translate: true,
    hideEmpty: true,
    render: (value: IBilling) => {
      if (value?.paymentGateway === PAYMENT_GATEWAYS_ENUM.BALANCE_TUAMBIA) return null;
      return <AddressValue value={value.address} showCountry showStreet />;
    },
  }, */
];

const OrderClientInfo = () => {
  const { t } = useTranslation('order');
  const { isLoading, order, error } = usePaidOrderContext();

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
      {/*
      // todo - definir
      <UserItem
        user={order?.owner as IUser}
        sx={{ paddingTop: 0, paddingLeft: 0 }}
        path={`/clients/clients/${userId}/general`}
      /> */}
      <Divider />
      {order && <DetailStack details={details} data={order?.billing} />}
    </FormPaper>
  );
};

export default memo(OrderClientInfo);
