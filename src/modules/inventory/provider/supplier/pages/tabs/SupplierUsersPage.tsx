import { memo, useMemo } from 'react';
import { useProviderProductsDetail } from '../../context/ProviderProductDetail';
import ProviderUsersContainer from 'modules/security/user-providers/container/ProviderUsersContainer';
import { PROVIDER_TYPE_ENUM } from 'modules/inventory/provider/common/constants';

const SupplierUsersPage = () => {
  const { providerProducts } = useProviderProductsDetail();
  const path = useMemo(() => `/inventory/settings/suppliers/${providerProducts?._id as string}`, [providerProducts]);

  return (
    <ProviderUsersContainer
      path={`${path}/users`}
      provider={providerProducts?.name}
      providerType={PROVIDER_TYPE_ENUM.SUPPLIER}
    />
  );
};

export default memo(SupplierUsersPage);
