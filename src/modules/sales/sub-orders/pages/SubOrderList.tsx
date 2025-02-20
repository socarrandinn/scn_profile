import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { PagePaperLayout } from 'layouts/index';
import { TableProvider } from '@dfl/mui-admin-layout';
import SubOrderListContainer from '../containers/SubOrderListContainer';
import { subOrderFilters } from '../constants/sub-order.filters';

const SubOrderList = () => {
  const { t } = useTranslation('subOrder');

  return (
    <PagePaperLayout title={t('list')} mb={3}>
      <TableProvider id={'sub-orders'} filters={subOrderFilters}>
        <SubOrderListContainer />
      </TableProvider>
    </PagePaperLayout>
  );
};

export default memo(SubOrderList);
