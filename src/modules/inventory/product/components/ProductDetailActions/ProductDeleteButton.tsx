import { memo } from 'react';
import DeleteButton from 'components/DeleteAction/DeleteButton';
import { useProductDetail } from '../../contexts/ProductDetail';
import { useDeleteProduct } from '../../hooks/useDeleteProduct';

const ProductDeleteButton = () => {
  const { id } = useProductDetail();
  const { mutate, isLoading } = useDeleteProduct(id, () => 'void');
  return <DeleteButton isLoading={isLoading} onDelete={mutate} />;
};

export default memo(ProductDeleteButton);
