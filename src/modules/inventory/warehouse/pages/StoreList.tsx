import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { PagePaperLayout } from 'layouts/index';
import { TableProvider } from '@dfl/mui-admin-layout';
import StoreListContainer from 'modules/inventory/warehouse/containers/StoreListContainer';
import { warehouseFilters } from 'modules/inventory/warehouse/constants/warehouse.filters';

const StoreList = () => {
  const { t } = useTranslation('warehouse');

  return (
    <PagePaperLayout title={t('list')}>
      <TableProvider id={'warehouses'} filters={warehouseFilters}>
        <StoreListContainer />
      </TableProvider>
    </PagePaperLayout>
  );
};

export default memo(StoreList);
