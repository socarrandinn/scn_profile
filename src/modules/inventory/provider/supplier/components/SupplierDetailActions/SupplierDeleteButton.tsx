import { memo } from 'react';
import DeleteButton from 'components/Actions/DeleteAction/DeleteButton';
import { useProviderProductsDetail } from 'modules/inventory/provider/supplier/context/ProviderProductDetail';
import { useDeleteProducts } from 'modules/inventory/provider/supplier/hooks/useDeleteProducts';

const SupplierDeleteButton = () => {
  const { providerProductsId } = useProviderProductsDetail();
  const { mutate, isLoading } = useDeleteProducts(providerProductsId as string, () => 'void', true);
  return <DeleteButton isLoading={isLoading} onDelete={mutate} />;
};

export default memo(SupplierDeleteButton);
