import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { PagePaperLayout } from 'layouts/index';
import { TableProvider } from '@dfl/mui-admin-layout';
import DistributionCentersListContainer from 'modules/inventory/distribution-centers/containers/DistributionCentersListContainer';
import { distributionCentersFilters } from 'modules/inventory/distribution-centers/constants/distribution-centers.filters';

const DistributionCentersList = () => {
  const { t } = useTranslation('distributionCenters');

  return (
    <PagePaperLayout title={t('list')}>
      <TableProvider id={'distributionCenters'} filters={distributionCentersFilters}>
        <DistributionCentersListContainer />
      </TableProvider>
    </PagePaperLayout>
  );
};

export default memo(DistributionCentersList);
