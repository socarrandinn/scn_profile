import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { TimeOffPoliciesService } from 'modules/rrhh/settings/time-off-policies/services';
import { TIME_OFF_POLICIES_LIST_KEY } from 'modules/rrhh/settings/time-off-policies/constants/queries';

export const useFindTimeOffPolicies = () => {
  // @ts-ignore
  const { fetch, queryKey } = useTableRequest((params) => TimeOffPoliciesService.search({ ...params, populate: true }));

  return useQuery([TIME_OFF_POLICIES_LIST_KEY, queryKey], fetch);
};
