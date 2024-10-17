import { memo } from 'react';
import { PaidOrderProvider } from 'modules/sales/paid-order/contexts/PaidOrderContext';
import { useParams } from 'react-router-dom';
import { PaidOrderHeaderDetails } from '../components/PaidOrderHeaderDetails';
import { PageLayout } from 'layouts/index';
import { PaidOrderDetailsContent } from '../components/PaidOrderDetailsContent';

const PaidOrderDetailContainer = () => {
  const { id } = useParams();
  return (
    <PaidOrderProvider paidOrderId={id as string}>
      <PaidOrderHeaderDetails />
      <PageLayout>
        <PaidOrderDetailsContent />
      </PageLayout>
    </PaidOrderProvider>
  );
};

export default memo(PaidOrderDetailContainer);
