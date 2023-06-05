import { memo, useCallback } from 'react';
import CategoryCreateModal from 'modules/rrhh/settings/category/containers/CategoryCreateModal';
import { useSearchParams } from 'react-router-dom';
import { useFindOneCategory } from 'modules/rrhh/settings/category/hooks/useFindOneCategory';

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
      key={data?._id}
      title={'edit'}
      open={!!entityId}
      onClose={handleCloseEdit}
      initValue={{
        ...data,
        // @ts-ignore
        icon: data?.icon === 'category' ? 'AdminPanelSettingsIcon' : data?.icon,
      }}
      loadingInitData={isLoading}
      dataError={error}
    />
  );
};

export default memo(CategoryEditModal);
