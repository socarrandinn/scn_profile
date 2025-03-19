import { useQuery } from '@tanstack/react-query';
import { BankService } from 'modules/sales/settings/bank/services';
import { BANKS_ONE_KEY } from 'modules/sales/settings/bank/constants';
import { useCallback } from 'react';
import { IBank } from 'modules/sales/settings/bank/interfaces';

export const useFindOneBank = (id: string | null) => {
  const fetch = useCallback(() => BankService.getOne(id as string), [id]);
  return useQuery<IBank>([id, BANKS_ONE_KEY], fetch, { enabled: !!id });
};
