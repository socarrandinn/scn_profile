import { memo } from 'react';
import { PagePaperLayout } from 'layouts/index';
import { useTranslation } from 'react-i18next';
import { TableProvider } from '@dfl/mui-admin-layout';
import LogisticDistributionCentersListContainer from '../../containers/LogisticDistributionCentersListContainer';
import { distributionCentersLogisticProviderFilters } from 'modules/inventory/distribution-centers/constants';

const LogisticDistributionCentersPage = () => {
  const { t } = useTranslation('distributionCenters');
  return (
    <PagePaperLayout title={t('list')} sx={{ mt: 0 }}>
      <TableProvider id={'logistic-distribution-centers'} filters={distributionCentersLogisticProviderFilters}>
        <LogisticDistributionCentersListContainer />
      </TableProvider>
    </PagePaperLayout>
  );
};

export default memo(LogisticDistributionCentersPage);
