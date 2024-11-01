import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { PagePaperLayout } from 'layouts/index';
import { TableProvider } from '@dfl/mui-admin-layout';
import PaidOrderListContainer from 'modules/sales/paid-order/containers/PaidOrderListContainer';
import { paidOrderFilters } from '../constants';

const PaidOrderList = () => {
  const { t } = useTranslation('paidOrder');

  return (
    <PagePaperLayout title={t('list')}>
      <TableProvider id={'paid-orders'} filters={paidOrderFilters}>
        <PaidOrderListContainer />
      </TableProvider>
    </PagePaperLayout>
  );
};

export default memo(PaidOrderList);
