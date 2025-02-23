import { useQuery } from '@tanstack/react-query';
import { useCallback } from 'react';
import { ReconciliationAdjustmentService } from '../services';
import { IReconciliationAdjustment } from '../interfaces/IReconciliationAdjustment';
import { RECONCILIATION_ADJUSTMENT_GET_ONE } from '../constants/reconciliation-adjustment.query-keys';

export const useFindOneReconciliationAdjustment = (id?: string | null) => {
  const fetch = useCallback(() => ReconciliationAdjustmentService.getOne(id as string), [id]);
  return useQuery<IReconciliationAdjustment>([id, RECONCILIATION_ADJUSTMENT_GET_ONE], fetch, { enabled: !!id });
};
