import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { HandlerError } from '@dfl/mui-react-common';
import { usePaidOrderContext } from 'modules/sales/paid-order/contexts/PaidOrderContext';
import OrderInfoSkeleton from '../OrderShippingInfo/OrderInfoSkeleton';
import { FormPaper } from 'modules/common/components/FormPaper';

const OrderPaymentInfo = () => {
  const { t } = useTranslation('order');
  const { isLoading, /* order, */ error } = usePaidOrderContext();

  if (isLoading) return <OrderInfoSkeleton />;

  if (error) {
    return (
      <FormPaper title={t('billing.information.title')}>
        <HandlerError error={error} />
      </FormPaper>
    );
  }

  // if (!order?.billing?.information) return null;

  return (
    <FormPaper title={t('billing.information.title')}>
      POR DEFINIR
      {/* <DetailStack details={details} data={data?.payment?.information} /> */}
    </FormPaper>
  );
};

export default memo(OrderPaymentInfo);
