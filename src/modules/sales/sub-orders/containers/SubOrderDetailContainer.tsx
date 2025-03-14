import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { PageLayout } from 'layouts/index';
import { OrderProvider } from 'modules/sales/common/contexts/OrderContext';
import SubOrderDetailsContent from '../components/SubOrderDetailsContent/SubOrderDetailsContent';
import SubOrderHeaderDetails from '../components/SubOrderHeaderDetails/SubOrderHeaderDetails';
import { ORDER_TYPE_ENUM } from 'modules/sales/common/constants/order.enum';

const SubOrderDetailContainer = () => {
  const { id } = useParams();
  return (
    <OrderProvider orderId={id as string} orderType={ORDER_TYPE_ENUM.SUB_ORDER}>
      <SubOrderHeaderDetails />
      <PageLayout>
        <SubOrderDetailsContent />
      </PageLayout>
    </OrderProvider>
  );
};

export default memo(SubOrderDetailContainer);
