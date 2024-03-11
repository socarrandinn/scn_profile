import { TableProvider } from '@dfl/mui-admin-layout';
import { PagePaperLayout } from 'layouts/index';
import { storeFilters } from 'modules/inventory/store/constants';
import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import LogisticStoreListContainer from '../containers/LogisticStoreListContainer';

const LogisticStoresPages = () => {
  const { t } = useTranslation('store');
  return (
    <PagePaperLayout title={t('list')}>
      <TableProvider id={'stores'} filters={storeFilters}>
        <LogisticStoreListContainer />
      </TableProvider>
    </PagePaperLayout>
  );
};

export default memo(LogisticStoresPages);
