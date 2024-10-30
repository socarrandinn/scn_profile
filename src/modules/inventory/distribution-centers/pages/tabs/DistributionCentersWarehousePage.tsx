import { memo } from 'react';
import { TableProvider } from '@dfl/mui-admin-layout';
import { PagePaperLayout } from 'layouts/index';
import { useTranslation } from 'react-i18next';
import { distributionCenterWarehouseFilters } from 'modules/inventory/warehouse/constants';
import DistributionCentersWarehouseListContainer from '../../containers/DistributionCentersWarehouseListContainer';

const DistributionCentersWarehousePage = () => {
  const { t } = useTranslation('warehouse');
  return (
    <PagePaperLayout title={t('list')}>
      <TableProvider id={'distribution-centers-warehouse'} filters={distributionCenterWarehouseFilters}>
        <DistributionCentersWarehouseListContainer />
      </TableProvider>
    </PagePaperLayout>
  );
};

export default memo(DistributionCentersWarehousePage);
