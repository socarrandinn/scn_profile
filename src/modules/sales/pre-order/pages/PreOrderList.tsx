import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { PagePaperLayout } from 'layouts/index';
import { FilterViewProvider, TableProvider } from '@dfl/mui-admin-layout';
import PreOrderListContainer from '../containers/PreOrderListContainer';
import { preOrderFilters } from '../constants/pre-order.filters';

import { PRE_ORDER_VIEWS } from 'modules/sales/common/constants/order-tabs-view.constants';

const PreOrderList = () => {
  const { t } = useTranslation('preOrder');
  // const { isLoading, data } = useOrderFiltersByOrderStatus(ORDER_TYPE_ENUM.PRE_ORDER);

  return (
    <PagePaperLayout title={t('list')} mb={3}>
      <TableProvider id={'pre-order'} filters={preOrderFilters}>
        <FilterViewProvider views={PRE_ORDER_VIEWS} defaultView={'all'}>
          <PreOrderListContainer />
        </FilterViewProvider>
      </TableProvider>
    </PagePaperLayout>
  );
};

export default memo(PreOrderList);
