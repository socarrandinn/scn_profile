import { useQuery } from '@tanstack/react-query';
import { DispatchService } from '../services';
import { DISPATCH_VERIFY_KEY } from '../constants';
import { IVerifyPayload } from '../interfaces';

export const useDispatchVerify = (payload: IVerifyPayload, enabled: boolean) => {
  return useQuery([DISPATCH_VERIFY_KEY, payload], () => DispatchService.verify(payload), {
    enabled,
  });
};
