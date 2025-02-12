import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { ConciliationAdjustmentCausesService } from 'modules/sales/settings/conciliation-adjustment-causes/services';
import { CONCILIATION_ADJUSTMENT_CAUSES_LIST_KEY } from 'modules/sales/settings/conciliation-adjustment-causes/constants';

export const useFindConciliationAdjustmentCauses = () => {
  const { fetch, queryKey } = useTableRequest(ConciliationAdjustmentCausesService.search);

  return useQuery([CONCILIATION_ADJUSTMENT_CAUSES_LIST_KEY, queryKey], fetch);
};
