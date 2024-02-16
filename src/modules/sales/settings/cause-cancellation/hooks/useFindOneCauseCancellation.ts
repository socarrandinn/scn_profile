import { useQuery } from '@tanstack/react-query';
import { CauseCancellationService } from 'modules/sales/settings/cause-cancellation/services';
import { CAUSE_CANCELLATIONS_ONE_KEY } from 'modules/sales/settings/cause-cancellation/constants';
import { useCallback } from 'react';
import { ICauseCancellation } from 'modules/sales/settings/cause-cancellation/interfaces';

export const useFindOneCauseCancellation = (id: string | null) => {
  const fetch = useCallback(() => CauseCancellationService.getOne(id as string), [id]);
  return useQuery<ICauseCancellation>([id, CAUSE_CANCELLATIONS_ONE_KEY], fetch, { enabled: !!id });
};
