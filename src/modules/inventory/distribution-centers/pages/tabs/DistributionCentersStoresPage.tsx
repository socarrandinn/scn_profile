import { memo } from 'react';
import { TableProvider } from '@dfl/mui-admin-layout';
import { PagePaperLayout } from 'layouts/index';
import { useTranslation } from 'react-i18next';
import DistributionCentersStoreListContainer from 'modules/inventory/distribution-centers/containers/DistributionCentersStoreListContainer';
import { distributionCenterWarehouseFilters } from 'modules/inventory/warehouse/constants';

const WarehouseProviderSupplierPage = () => {
  const { t } = useTranslation('supplier');
  return (
    <PagePaperLayout title={t('list')}>
      <TableProvider id={'distribution_centers_stores'} filters={distributionCenterWarehouseFilters}>
        <DistributionCentersStoreListContainer />
      </TableProvider>
    </PagePaperLayout>
  );
};

export default memo(WarehouseProviderSupplierPage);
