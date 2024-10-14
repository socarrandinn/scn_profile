import { TableProvider } from '@dfl/mui-admin-layout';
import { PagePaperLayout } from 'layouts/index';
import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { warehouseAreaFilters } from 'modules/inventory/settings/warehouse-area/constants';
import LogisticStoreAreasListContainer from '../containers/LogisticStoreAreasListContainer';

const LogisticStoresPages = () => {
  const { t } = useTranslation('warehouseArea');
  return (
    <PagePaperLayout title={t('list')}>
      <TableProvider id={'storeAreas'} filters={warehouseAreaFilters}>
        <LogisticStoreAreasListContainer />
      </TableProvider>
    </PagePaperLayout>
  );
};

export default memo(LogisticStoresPages);
