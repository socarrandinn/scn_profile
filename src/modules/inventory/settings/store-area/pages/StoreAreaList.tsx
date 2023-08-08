import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { PagePaperLayout } from 'layouts/index';
import { TableProvider } from '@dfl/mui-admin-layout';
import StoreAreaListContainer from 'modules/inventory/settings/store-area/containers/StoreAreaListContainer';
import { storeAreaFilters } from 'modules/inventory/settings/store-area/constants/store-area.filters';

const StoreAreaList = () => {
  const { t } = useTranslation('storeArea');

  return (
    <PagePaperLayout title={t('list')}>
      <TableProvider id={'storeAreas'} filters={storeAreaFilters}>
        <StoreAreaListContainer />
      </TableProvider>
    </PagePaperLayout>
  );
};

export default memo(StoreAreaList);
