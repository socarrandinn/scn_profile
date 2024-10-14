import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { PageLayout, PagePaperLayout } from 'layouts/index';
import { TableProvider } from '@dfl/mui-admin-layout';
import StoreAreaListContainer from 'modules/inventory/settings/warehouse-area/containers/StoreAreaListContainer';
import { storeAreaFilters } from 'modules/inventory/settings/warehouse-area/constants/store-area.filters';
import { HelperText } from 'modules/inventory/settings/warehouse-area/components/HelperText';

const StoreAreaList = () => {
  const { t } = useTranslation('storeArea');

  return (
    <PageLayout>
      <HelperText text={t('description')} />
      <PagePaperLayout title={t('list')}>
        <TableProvider id={'storeAreas'} filters={storeAreaFilters}>
          <StoreAreaListContainer />
        </TableProvider>
      </PagePaperLayout>
    </PageLayout>
  );
};

export default memo(StoreAreaList);
