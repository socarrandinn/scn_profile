import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { BankService } from 'modules/sales/settings/bank/services';
import { BANKS_LIST_KEY } from 'modules/sales/settings/bank/constants';

export const useFindBanks = () => {
  const { fetch, queryKey } = useTableRequest(BankService.search);

  return useQuery([BANKS_LIST_KEY, queryKey], fetch);
};
