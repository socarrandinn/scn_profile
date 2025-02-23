import { Table } from '@dfl/mui-admin-layout';
import { ReconciliationAdjustmentListToolbar } from '../components/ReconciliationAdjustmentListToolbar';
import { useFindReconciliationAdjustment } from '../hooks/useFindReconciliationAdjustment';
import { reconciliationAdjustmentColumns } from '../constants/reconciliation-adjustment.columns';
import ReconciliationAdjustmentEditModal from './ReconciliationAdjustmentEditModal';

const ReconciliationAdjustmentContainer = () => {
  const { isLoading, error, data, filters, search } = useFindReconciliationAdjustment();
  return (
    <>
      <ReconciliationAdjustmentListToolbar filters={filters} search={search as string} total={data?.total} />
      <Table
        columns={reconciliationAdjustmentColumns}
        data={data?.data}
        total={data?.total}
        isLoading={isLoading}
        error={error}
      />
      <ReconciliationAdjustmentEditModal />
    </>
  );
};

export default ReconciliationAdjustmentContainer;
