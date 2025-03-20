import { useUserDetail } from 'modules/security/users/contexts/UserDetailContext';
import { useMemo } from 'react';

export const useProviderMapperData = () => {
  const { user } = useUserDetail();

  const logistic = useMemo(() => user?.security?.roles?.find((r) => !!r.provider), [user]);

  return {
    logistic,
  };
};
