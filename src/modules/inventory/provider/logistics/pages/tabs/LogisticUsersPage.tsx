import { memo } from 'react';
import { useLogisticsDetailContext } from '../../context/LogisticDetail';
import ProviderUsersContainer from 'modules/security/user-providers/container/ProviderUsersContainer';

const LogisticUsersPage = () => {
  const { logistic } = useLogisticsDetailContext();

  return (
    <ProviderUsersContainer
      path={`/inventory/settings/logistics/${logistic?._id as string}/users`}
      provider={logistic?.name}
    />
  );
};

export default memo(LogisticUsersPage);
