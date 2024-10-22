import { memo } from 'react';
import { OrderProvider } from 'modules/sales/common/contexts/OrderContext';
import { useParams } from 'react-router-dom';
import { PaidOrderHeaderDetails } from '../components/PaidOrderHeaderDetails';
import { PageLayout } from 'layouts/index';
import { PaidOrderDetailsContent } from '../components/PaidOrderDetailsContent';
import { ORDER_TYPE_ENUM } from 'modules/sales/common/constants/order.enum';

const PaidOrderDetailContainer = () => {
  const { id } = useParams();
  return (
    <OrderProvider orderId={id as string} orderType={ORDER_TYPE_ENUM.PAID_ORDER}>
      <PaidOrderHeaderDetails />
      <PageLayout>
        <PaidOrderDetailsContent />
      </PageLayout>
    </OrderProvider>
  );
};

export default memo(PaidOrderDetailContainer);
