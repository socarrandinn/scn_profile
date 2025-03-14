import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { PagePaperLayout } from 'layouts/index';
import { TableProvider } from '@dfl/mui-admin-layout';
import ClientOrderListContainer from '../../containers/ClientOrderListContainer';
import { clientOrderFilters } from '../../constants/clients-order.filters';

const ClientOrderListPage = () => {
  const { t } = useTranslation('clients');

  return (
    <PagePaperLayout title={t('tabs.orders')} mb={3}>
      <TableProvider id={'client-orders'} filters={clientOrderFilters}>
        <ClientOrderListContainer />
      </TableProvider>
    </PagePaperLayout>
  );
};

export default memo(ClientOrderListPage);
