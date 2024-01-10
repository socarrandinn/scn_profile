import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { PagePaperLayout } from 'layouts/index';
import { TableProvider } from '@dfl/mui-admin-layout';
import StoreListContainer from 'modules/inventory/store/containers/StoreListContainer';
import { storeFilters } from 'modules/inventory/store/constants/store.filters';

const StoreList = () => {
  const { t } = useTranslation('store');

  return (
    <PagePaperLayout title={t('list')}>
      <TableProvider id={'stores'} filters={storeFilters}>
        <StoreListContainer />
      </TableProvider>
    </PagePaperLayout>
  );
};

export default memo(StoreList);
