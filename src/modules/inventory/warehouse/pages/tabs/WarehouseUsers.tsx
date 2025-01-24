import { memo } from 'react';
import { useWarehouseDetail } from '../../context/WarehouseContext';
import ProviderUsersContainer from 'modules/security/user-providers/container/ProviderUsersContainer';

const WarehouseUsers = () => {
  const { warehouse } = useWarehouseDetail();

  return (
    <ProviderUsersContainer path={`/inventory/warehouses/${warehouse?._id as string}/users`} provider={warehouse?.name} />
  );
};

export default memo(WarehouseUsers);
