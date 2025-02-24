import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

export const useReconciliationAdjustmentParamsSearch = () => {
  const [searchParams] = useSearchParams();
  const detailId = searchParams.get('details');
  const editId = searchParams.get('edit');
  const isDetail = useMemo(() => !!detailId, [detailId]);
  const isEdit = useMemo(() => !!editId, [editId]);

  return {
    isDetail,
    isEdit,
    editId,
    detailId,
  };
};
