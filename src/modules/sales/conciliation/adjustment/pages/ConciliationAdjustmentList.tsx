import { memo } from 'react';
import { PagePaperLayout } from 'layouts/index';
import { TableProvider } from '@dfl/mui-admin-layout';
import { useTranslation } from 'react-i18next';
import { adjustmentFilters } from '../constants/reconciliation-adjustment.filters';
import ReconciliationAdjustmentContainer from '../containers/ReconciliationAdjustmentContainer';

const ConciliationAdjustmentList = () => {
  const { t } = useTranslation('conciliation');

  return (
    <PagePaperLayout title={t('adjustment.list')}>
      <TableProvider id={'reconciliation-adjustment'} filters={adjustmentFilters}>
        <ReconciliationAdjustmentContainer />
      </TableProvider>
    </PagePaperLayout>
  );
};

export default memo(ConciliationAdjustmentList);
