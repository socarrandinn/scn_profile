import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { HandlerError } from '@dfl/mui-react-common';
import { FormPaper } from 'modules/common/components/FormPaper';
import { useOrderContext } from 'modules/sales/common/contexts/OrderContext';
import OrderInfoSkeleton from 'modules/sales/common/components/OrderDetails/OrderShippingInfo/OrderInfoSkeleton';
import SubOrderDetail from './SubOrderDetail';
import ProductTotal from './ProductTotal';
import { IOrder } from 'modules/sales/common/interfaces/IOrder';

const OrderProductsInfo = ({ isParent }: { isParent?: boolean }) => {
  const { t } = useTranslation('order');
  const { isLoading, order, error } = useOrderContext();

  const suborders = isParent ? order?.suborders : [order as IOrder];

  if (isLoading) {
    return (
      <FormPaper title={t('section.products')}>
        <OrderInfoSkeleton />
      </FormPaper>
    );
  }

  if (error) {
    return (
      <FormPaper title={t('section.products')}>
        <HandlerError error={error} />
      </FormPaper>
    );
  }

  return (
    <FormPaper title={t('section.products')}>
      <SubOrderDetail suborders={suborders} />

      {/* total */}
      {isParent && <ProductTotal amount={order?.invoice?.details?.products?.value || 0} invoice={order?.invoice} />}
    </FormPaper>
  );
};

export default memo(OrderProductsInfo);
