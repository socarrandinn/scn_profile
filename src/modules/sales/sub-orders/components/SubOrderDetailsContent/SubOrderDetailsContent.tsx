import { memo, Suspense } from 'react';
import { RouteLoader } from '@dfl/react-security';
import ContentLoader from 'components/ContentLoader/ContentLoader';

import { useOrderContext } from 'modules/sales/common/contexts/OrderContext';
import subOrderRouters from '../../routes/details';
import { SUB_ORDER_ROUTE } from '../../constants/sub-order.route';

const SubOrderDetailsContent = () => {
  const { order } = useOrderContext();

  return (
    <Suspense fallback={<ContentLoader />}>
      <RouteLoader
        routes={subOrderRouters}
        notfoundRedirect={`${SUB_ORDER_ROUTE.DETAIL(order?._id as string)}/general`}
      />
    </Suspense>
  );
};

export default memo(SubOrderDetailsContent);
