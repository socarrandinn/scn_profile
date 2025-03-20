import { memo, Suspense } from 'react';
import { RouteLoader } from '@dfl/react-security';
import ContentLoader from 'components/ContentLoader/ContentLoader';
import { PRE_ORDER_ROUTE } from '../../constants/pre-order.route';
import preOrderRouters from '../../routes/details';
import { useOrderContext } from 'modules/sales/common/contexts/OrderContext';

const PreOrderDetailsContent = () => {
  const { order } = useOrderContext();

  return (
    <Suspense fallback={<ContentLoader />}>
      <RouteLoader routes={preOrderRouters} notfoundRedirect={`${PRE_ORDER_ROUTE.DETAIL(order?._id as string)}`} />
    </Suspense>
  );
};

export default memo(PreOrderDetailsContent);
