import { useQuery } from '@tanstack/react-query';
import { ReasonForJobChangeService } from 'modules/store/employee/settings/reason-for-job-change/services';
import { REASON_FOR_JOB_CHANGES_ONE_KEY } from 'modules/store/employee/settings/reason-for-job-change/constants/queries';
import { useCallback } from 'react';
import { IReasonForJobChange } from 'modules/store/employee/settings/reason-for-job-change/interfaces';

export const useFindOneReasonForJobChanges = (id: string | null) => {
  const fetch = useCallback(() => ReasonForJobChangeService.getOne(id as string), [id]);
  return useQuery<IReasonForJobChange>([id, REASON_FOR_JOB_CHANGES_ONE_KEY], fetch, { enabled: !!id });
};
