import { memo } from 'react';
import { useWarehouseDetail } from '../../context/WarehouseContext';
import SystemUsersContainer from 'modules/security/user-system/container/SystemUsersContainer';

const WarehouseSystemUsers = () => {
  const { warehouse } = useWarehouseDetail();

  return (
    <SystemUsersContainer path={`/inventory/warehouses/${warehouse?._id as string}/users/system-users`} />
  );
};

export default memo(WarehouseSystemUsers);
