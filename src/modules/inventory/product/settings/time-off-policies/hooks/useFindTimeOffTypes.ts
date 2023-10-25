import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { TimeOffPolicyTypesService } from 'modules/inventory/product/settings/time-off-policies/services';
import { TIME_OFF_POLICY_TYPES_LIST_KEY } from 'modules/inventory/product/settings/time-off-policies/constants/queries';

export const useFindTimeOffTypes = () => {
  const { fetch, queryKey } = useTableRequest(TimeOffPolicyTypesService.search);

  return useQuery([TIME_OFF_POLICY_TYPES_LIST_KEY, queryKey], fetch);
};
