import { memo, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useFindOneProductFeatures } from '../hooks/useFindOneProductFeature';
import ProductFeatureCreateModal from './ProductFeatureCreateModal';

const ProductFeatureEditModal = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const entityId = searchParams.get('edit');
  const { isLoading, data, error } = useFindOneProductFeatures(entityId);

  const handleCloseEdit = useCallback(() => {
    entityId && searchParams.delete('edit');
    setSearchParams(searchParams);
  }, [entityId, searchParams, setSearchParams]);

  return (
    <ProductFeatureCreateModal
      title={'edit'}
      open={!!entityId}
      onClose={handleCloseEdit}
      initValue={data}
      loadingInitData={isLoading}
      dataError={error}
    />
  );
};

export default memo(ProductFeatureEditModal);
