import { useCallback } from 'react';
import { useQuery } from '@tanstack/react-query';
import { TIME_OFF_POLICY_KEY } from 'modules/store/product/settings/time-off-policies/constants/queries';
import { TimeOffPoliciesService } from 'modules/store/product/settings/time-off-policies/services';
import { ITimeOffPolicies } from 'modules/store/product/settings/time-off-policies/interfaces';

export const useFindOneTimeOffPolicy = (id: string | null, editType?: boolean) => {
  const fetch = useCallback(() => {
    return TimeOffPoliciesService.getOne(id as string);
  }, [id]);

  return useQuery<ITimeOffPolicies>([id, TIME_OFF_POLICY_KEY], fetch, { enabled: !!id && !!editType });
};
