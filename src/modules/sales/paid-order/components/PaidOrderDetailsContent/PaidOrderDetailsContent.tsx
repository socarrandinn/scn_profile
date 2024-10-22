import { memo, Suspense } from 'react';
import { RouteLoader } from '@dfl/react-security';
import ContentLoader from 'components/ContentLoader/ContentLoader';
import { PAID_ORDER_ROUTE } from '../../constants/paid-order.route';
import paidOrderRouters from '../../routes/details';
import { useOrderContext } from 'modules/sales/common/contexts/OrderContext';

const PaidOrderDetailsContent = () => {
  const { order } = useOrderContext();

  return (
    <Suspense fallback={<ContentLoader />}>
      <RouteLoader
        routes={paidOrderRouters}
        notfoundRedirect={`${PAID_ORDER_ROUTE.DETAIL(order?._id as string)}/general`}
      />
    </Suspense>
  );
};

export default memo(PaidOrderDetailsContent);
