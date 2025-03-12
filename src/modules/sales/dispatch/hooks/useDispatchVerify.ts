import { useQuery } from '@tanstack/react-query';
import { DispatchService } from '../services';
import { DISPATCH_VERIFY_KEY } from '../constants';

export const useDispatchVerify = (search: any, filters: any, enabled: boolean) => {
  return useQuery([DISPATCH_VERIFY_KEY, filters, search], () => DispatchService.verify(filters, search), {
    enabled,
  });
};
