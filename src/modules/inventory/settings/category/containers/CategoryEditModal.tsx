import { memo, useCallback } from 'react';
import CategoryCreateModal from 'modules/inventory/settings/category/containers/CategoryCreateModal';
import { useSearchParams } from 'react-router-dom';
import { useFindOneCategory } from 'modules/inventory/settings/category/hooks/useFindOneCategory';

const CategoryEditModal = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const entityId = searchParams.get('edit');
  const { isLoading, data, error } = useFindOneCategory(entityId);
  const handleCloseEdit = useCallback(() => {
    const params = Object.fromEntries(searchParams.entries());
    delete params.edit;
    setSearchParams(params);
  }, [searchParams, setSearchParams]);

  return (
    <CategoryCreateModal
      title={'edit'}
      open={!!entityId}
      onClose={handleCloseEdit}
      initValue={data}
      loadingInitData={isLoading}
      dataError={error}
    />
  );
};

export default memo(CategoryEditModal);
