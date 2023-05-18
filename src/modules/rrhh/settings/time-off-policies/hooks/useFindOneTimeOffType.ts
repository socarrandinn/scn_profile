import { useCallback } from 'react';
import { useQuery } from '@tanstack/react-query';
import { TIME_OFF_POLICY_TYPE_KEY } from 'modules/rrhh/settings/time-off-policies/constants/queries';
import { TimeOffPolicyTypesService } from 'modules/rrhh/settings/time-off-policies/services';
import { ITimeOffPolicyType } from 'modules/rrhh/settings/time-off-policies/interfaces';

export const useFindOneTimeOffType = (id: string | null, editType?: boolean) => {
  const fetch = useCallback(() => {
    return TimeOffPolicyTypesService.getOne(id as string);
  }, [id]);

  return useQuery<ITimeOffPolicyType>([id, TIME_OFF_POLICY_TYPE_KEY], fetch, { enabled: !!id && !!editType });
};
