import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { PagePaperLayout } from 'layouts/index';
import { TableProvider } from '@dfl/mui-admin-layout';
import ConciliationAdjustmentCausesListContainer from 'modules/sales/settings/conciliation-adjustment-causes/containers/ConciliationAdjustmentCausesListContainer';
import { conciliationAdjustmentCausesFilters } from 'modules/sales/settings/conciliation-adjustment-causes/constants/conciliation-adjustment-causes.filters';

const ConciliationAdjustmentCausesList = () => {
  const { t } = useTranslation('conciliationAdjustmentCauses');

  return (
    <PagePaperLayout title={t('list')}>
      <TableProvider id={'conciliationAdjustmentCauses'} filters={conciliationAdjustmentCausesFilters}>
        <ConciliationAdjustmentCausesListContainer />
      </TableProvider>
    </PagePaperLayout>
  );
};

export default memo(ConciliationAdjustmentCausesList);
