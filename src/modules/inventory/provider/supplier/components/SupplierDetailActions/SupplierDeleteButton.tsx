import { memo } from 'react';
import { useProviderProductsDetail } from 'modules/inventory/provider/supplier/context/ProviderProductDetail';
import { useDeleteProducts } from 'modules/inventory/provider/supplier/hooks/useDeleteProducts';
import { DeleteButton } from 'components/Actions/DeleteAction';
import { DELETE_PROVIDER_ERRORS } from 'modules/inventory/provider/common/constants/provider-errors';

const SupplierDeleteButton = () => {
  const { providerProductsId } = useProviderProductsDetail();
  const { mutate, isLoading, error } = useDeleteProducts(providerProductsId as string, () => 'void', true);

  return <DeleteButton isLoading={isLoading} onDelete={mutate} error={error} errors={DELETE_PROVIDER_ERRORS} />;
};

export default memo(SupplierDeleteButton);
