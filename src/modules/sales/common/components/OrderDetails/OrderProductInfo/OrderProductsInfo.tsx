import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { HandlerError } from '@dfl/mui-react-common';
import Box from '@mui/material/Box';
import { FormPaper } from 'modules/common/components/FormPaper';
import { usePaidOrderContext } from 'modules/sales/paid-order/contexts/PaidOrderContext';
import OrderInfoSkeleton from 'modules/sales/common/components/OrderDetails/OrderShippingInfo/OrderInfoSkeleton';
import ProductTotal from './ProductTotal';
import ProductTableSubOrder from './ProductTableSubOrder';

const OrderProductsInfo = () => {
  const { t } = useTranslation('order');
  const { isLoading, order, error } = usePaidOrderContext();

  const _warehouses = useMemo(() => order?.items?.map((item) => item.warehouse), [order?.items]);

  if (isLoading) return <OrderInfoSkeleton />;

  if (error) {
    return (
      <FormPaper title={t('section.products')}>
        <HandlerError error={error} />
      </FormPaper>
    );
  }

  return (
    <FormPaper title={t('section.products')}>
      <Box>
        {order && _warehouses?.map((store) => <ProductTableSubOrder key={store} order={order} warehouse={store} />)}
      </Box>
      <Box mt={2}>
        <ProductTotal amount={order?.invoice?.details?.products?.value || 0} invoice={order?.invoice} />
      </Box>
    </FormPaper>
  );
};

export default memo(OrderProductsInfo);
