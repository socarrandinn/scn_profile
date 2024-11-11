import { memo, useCallback } from 'react';
import StoreAreaCreateModal from 'modules/inventory/settings/warehouse-area/containers/StoreAreaCreateModal';
import { useSearchParams } from 'react-router-dom';
import { useFindOneWarehouseArea } from 'modules/inventory/settings/warehouse-area/hooks/useFindOneWarehouseArea';

const StoreAreaEditModal = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const entityId = searchParams.get('edit');
  const { isLoading, data, error } = useFindOneWarehouseArea(entityId);
  const handleCloseEdit = useCallback(() => {
    const params = Object.fromEntries(searchParams.entries());
    delete params.edit;
    setSearchParams(params);
  }, [searchParams, setSearchParams]);

  return (
    <StoreAreaCreateModal
      title={'edit'}
      open={!!entityId}
      onClose={handleCloseEdit}
      initValue={data}
      loadingInitData={isLoading}
      dataError={error}
    />
  );
};

export default memo(StoreAreaEditModal);
