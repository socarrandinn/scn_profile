import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { PageLayout } from 'layouts/index';
import { PreOrderHeaderDetails } from '../components/PreOrderHeaderDetails';
import { PreOrderDetailsContent } from '../components/PreOrderDetailsContent';
import { OrderProvider } from 'modules/sales/common/contexts/OrderContext';
import { ORDER_TYPE_ENUM } from 'modules/sales/common/constants/order.enum';

const PreOrderDetailContainer = () => {
  const { id } = useParams();
  return (
    <OrderProvider orderId={id as string} orderType={ORDER_TYPE_ENUM.PRE_ORDER}>
      <PreOrderHeaderDetails />
      <PageLayout>
        <PreOrderDetailsContent />
      </PageLayout>
    </OrderProvider>
  );
};

export default memo(PreOrderDetailContainer);
