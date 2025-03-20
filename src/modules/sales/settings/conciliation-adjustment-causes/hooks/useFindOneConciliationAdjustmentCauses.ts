import { useQuery } from '@tanstack/react-query';
import { ConciliationAdjustmentCausesService } from 'modules/sales/settings/conciliation-adjustment-causes/services';
import { CONCILIATION_ADJUSTMENT_CAUSES_ONE_KEY } from 'modules/sales/settings/conciliation-adjustment-causes/constants';
import { useCallback } from 'react';
import { IConciliationAdjustmentCauses } from 'modules/sales/settings/conciliation-adjustment-causes/interfaces';

export const useFindOneConciliationAdjustmentCauses = (id: string | null) => {
  const fetch = useCallback(() => ConciliationAdjustmentCausesService.getOne(id as string), [id]);
  return useQuery<IConciliationAdjustmentCauses>([id, CONCILIATION_ADJUSTMENT_CAUSES_ONE_KEY], fetch, {
    enabled: !!id,
  });
};
