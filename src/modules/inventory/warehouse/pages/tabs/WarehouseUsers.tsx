import { memo, useMemo } from 'react';
import { useWarehouseDetail } from '../../context/WarehouseContext';
import ProviderUsersContainer from 'modules/security/user-providers/container/ProviderUsersContainer';
import { PROVIDER_TYPE_ENUM } from 'modules/inventory/provider/common/constants';

const WarehouseUsers = () => {
  const { warehouse } = useWarehouseDetail();
  const path = useMemo(() => `/inventory/warehouses/${warehouse?._id as string}`, [warehouse?._id]);

  return (
    <ProviderUsersContainer
      path={`${path}/users`}
      provider={warehouse?.name}
      providerType={PROVIDER_TYPE_ENUM.WAREHOUSE}
    />
  );
};

export default memo(WarehouseUsers);
