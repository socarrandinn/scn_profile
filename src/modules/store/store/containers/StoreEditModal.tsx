import { memo, useCallback } from 'react';
import StoreCreateModal from 'modules/store/store/containers/StoreCreateModal';
import { useSearchParams } from 'react-router-dom';
import { useFindOneStore } from 'modules/store/store/hooks/useFindOneStore';

const StoreEditModal = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const entityId = searchParams.get('edit');
  const { isLoading, data, error } = useFindOneStore(entityId);
  const handleCloseEdit = useCallback(() => {
    const params = Object.fromEntries(searchParams.entries());
    delete params.edit;
    setSearchParams(params);
  }, [searchParams, setSearchParams]);

  return (
    <StoreCreateModal
      title={'edit'}
      open={!!entityId}
      onClose={handleCloseEdit}
      initValue={data}
      loadingInitData={isLoading}
      dataError={error}
    />
  );
};

export default memo(StoreEditModal);
