import { memo, useCallback } from 'react';
import DispatchCreateModal from 'modules/sales/dispatch/containers/DispatchCreateModal';
import { useSearchParams } from 'react-router-dom';
import { useFindOneDispatch } from 'modules/sales/dispatch/hooks/useFindOneDispatch';

const DispatchEditModal = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const entityId = searchParams.get('edit');

  const { isLoading, data, error } = useFindOneDispatch(entityId);

  const handleCloseEdit = useCallback(() => {
    entityId && searchParams.delete('edit');
    setSearchParams(searchParams);
  }, [entityId, searchParams, setSearchParams]);

  return (
    <DispatchCreateModal
      title={'edit'}
      open={!!entityId}
      onClose={handleCloseEdit}
      initValue={data}
      loadingInitData={isLoading}
      dataError={error}
    />
  );
};

export default memo(DispatchEditModal);
