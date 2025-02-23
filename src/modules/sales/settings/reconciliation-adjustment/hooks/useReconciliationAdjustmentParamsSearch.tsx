import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

export const useReconciliationAdjustmentParamsSearch = () => {
  const [searchParams] = useSearchParams();
  const detailId = searchParams.get('details');
  const isDetail = useMemo(() => !!detailId, [detailId]);

  return {
    isDetail,
    detailId
  };
};
