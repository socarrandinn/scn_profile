import { memo, useCallback } from 'react';
import ProductDiscountCreateModal from 'modules/sales-offer/product-discount/containers/ProductDiscountCreateModal';
import { useSearchParams } from 'react-router-dom';
import { useFindOneProductDiscount } from 'modules/sales-offer/product-discount/hooks/useFindOneProductDiscount';

const ProductDiscountEditModal = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const entityId = searchParams.get('edit');
  const { isLoading, data, error } = useFindOneProductDiscount(entityId);
  const handleCloseEdit = useCallback(() => {
    const params = Object.fromEntries(searchParams.entries());
    delete params.edit;
    setSearchParams(params);
  }, [searchParams, setSearchParams]);

  return (
    <ProductDiscountCreateModal
      title={'edit'}
      open={!!entityId}
      onClose={handleCloseEdit}
      initValue={data}
      loadingInitData={isLoading}
      dataError={error}
    />
  );
};

export default memo(ProductDiscountEditModal);
