import { TableProvider } from '@dfl/mui-admin-layout';
import { PagePaperLayout } from 'layouts/index';
import { warehouseFilters } from 'modules/inventory/warehouse/constants';
import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import LogisticStoreListContainer from '../containers/LogisticStoreListContainer';

const LogisticStoresPages = () => {
  const { t } = useTranslation('warehouse');
  return (
    <PagePaperLayout title={t('list')} mb={3}>
      <TableProvider id={'warehouses'} filters={warehouseFilters}>
        <LogisticStoreListContainer />
      </TableProvider>
    </PagePaperLayout>
  );
};

export default memo(LogisticStoresPages);
