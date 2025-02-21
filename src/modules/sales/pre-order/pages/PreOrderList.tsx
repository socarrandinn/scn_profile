import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { PagePaperLayout } from 'layouts/index';
import { FilterViewProvider, TableProvider } from '@dfl/mui-admin-layout';
import PreOrderListContainer from '../containers/PreOrderListContainer';
import { preOrderFilters } from '../constants/pre-order.filters';
import { useOrderFiltersByOrderStatus } from 'modules/sales/common/hooks/useOrderStatus';
import { ORDER_TYPE_ENUM } from 'modules/sales/common/constants/order.enum';

const PreOrderList = () => {
  const { t } = useTranslation('preOrder');
  const { isLoading, data } = useOrderFiltersByOrderStatus(ORDER_TYPE_ENUM.PRE_ORDER);

  return (
    <PagePaperLayout title={t('list')} mb={3}>
      <TableProvider id={'pre-order'} filters={preOrderFilters}>
        <FilterViewProvider views={data} defaultView={'all'} waitToLoad={isLoading}>
          <PreOrderListContainer />
        </FilterViewProvider>
      </TableProvider>
    </PagePaperLayout>
  );
};

export default memo(PreOrderList);
