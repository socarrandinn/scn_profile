import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { HandlerError } from '@dfl/mui-react-common';
import Box from '@mui/material/Box';
import { FormPaper } from 'modules/common/components/FormPaper';
import { useOrderContext } from 'modules/sales/common/contexts/OrderContext';
import OrderInfoSkeleton from 'modules/sales/common/components/OrderDetails/OrderShippingInfo/OrderInfoSkeleton';
import ProductTotal from './ProductTotal';
import ProductTableSubOrder from './ProductTableSubOrder';

const OrderProductsInfo = () => {
  const { t } = useTranslation('order');
  const { isLoading, order, error } = useOrderContext();

  const _warehouses = useMemo(() => {
    const w = order?.items?.map((item) => item.warehouse);

    const warehouses = [...new Set(w)];
    return warehouses;
  }, [order?.items]);

  if (isLoading) return <OrderInfoSkeleton />;

  if (error) {
    return (
      <FormPaper nm title={t('section.products')}>
        <HandlerError error={error} />
      </FormPaper>
    );
  }

  return (
    <FormPaper nm title={t('section.products')}>
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
