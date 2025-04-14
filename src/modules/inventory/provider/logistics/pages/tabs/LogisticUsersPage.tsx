import { memo, useMemo } from 'react';
import { useLogisticsDetailContext } from '../../context/LogisticDetail';
import ProviderUsersContainer from 'modules/security/user-providers/container/ProviderUsersContainer';
import { PROVIDER_TYPE_ENUM } from 'modules/inventory/provider/common/constants';

const LogisticUsersPage = () => {
  const { logistic } = useLogisticsDetailContext();
  const path = useMemo(() => `/inventory/settings/logistics/${logistic?._id as string}`, [logistic?._id]);

  return (
    <ProviderUsersContainer
      path={`${path}/users`}
      provider={logistic?.name}
      providerType={PROVIDER_TYPE_ENUM.LOGISTIC}
    />
  );
};

export default memo(LogisticUsersPage);
