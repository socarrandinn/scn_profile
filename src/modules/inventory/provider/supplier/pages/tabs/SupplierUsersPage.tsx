import { memo } from 'react';
import { useProviderProductsDetail } from '../../context/ProviderProductDetail';
import ProviderUsersContainer from 'modules/security/user-providers/container/ProviderUsersContainer';

const SupplierUsersPage = () => {
  const { providerProducts } = useProviderProductsDetail();

  return (
    <ProviderUsersContainer path={`/inventory/settings/suppliers/${providerProducts?._id as string}/users`} />
  );
};

export default memo(SupplierUsersPage);
