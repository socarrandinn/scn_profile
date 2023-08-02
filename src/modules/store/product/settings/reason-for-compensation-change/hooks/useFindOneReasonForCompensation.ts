import { useQuery } from '@tanstack/react-query';
import { ReasonForCompensationChangeService } from 'modules/store/product/settings/reason-for-compensation-change/services';
import { REASON_FOR_COMPENSATION_CHANGES_ONE_KEY } from 'modules/store/product/settings/reason-for-compensation-change/constants/queries';
import { useCallback } from 'react';
import { IReasonForCompensationChange } from 'modules/store/product/settings/reason-for-compensation-change/interfaces';

export const useFindOneReasonForCompensationChanges = (id: string | null) => {
  const fetch = useCallback(() => ReasonForCompensationChangeService.getOne(id as string), [id]);
  return useQuery<IReasonForCompensationChange>([id, REASON_FOR_COMPENSATION_CHANGES_ONE_KEY], fetch, {
    enabled: !!id,
  });
};
