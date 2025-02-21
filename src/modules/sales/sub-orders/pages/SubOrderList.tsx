import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { PagePaperLayout } from 'layouts/index';
import { FilterViewProvider, TableProvider } from '@dfl/mui-admin-layout';
import SubOrderListContainer from '../containers/SubOrderListContainer';
import { subOrderFilters } from '../constants/sub-order.filters';
import { useOrderFiltersByOrderStatus } from 'modules/sales/common/hooks/useOrderStatus';

const SubOrderList = () => {
  const { t } = useTranslation('subOrder');
  const { isLoading, data } = useOrderFiltersByOrderStatus();
  return (
    <PagePaperLayout title={t('list')} mb={3}>
      <TableProvider id={'sub-orders'} filters={subOrderFilters}>
        <FilterViewProvider views={data} defaultView={'all'} waitToLoad={isLoading}>
          <SubOrderListContainer />
        </FilterViewProvider>
      </TableProvider>
    </PagePaperLayout>
  );
};

export default memo(SubOrderList);
