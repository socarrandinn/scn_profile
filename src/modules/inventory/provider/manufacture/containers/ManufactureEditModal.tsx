import { memo, useCallback } from 'react';
import ManufactureCreateModal from 'modules/inventory/provider/manufacture/containers/ManufactureCreateModal';
import { useSearchParams } from 'react-router-dom';
import { useFindOneManufacture } from 'modules/inventory/provider/manufacture/hooks/useFindOneManufacture';

const ManufactureEditModal = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const entityId = searchParams.get('edit');
  const { isLoading, data, error } = useFindOneManufacture(entityId);
  const handleCloseEdit = useCallback(() => {
    const params = Object.fromEntries(searchParams.entries());
    delete params.edit;
    setSearchParams(params);
  }, [searchParams, setSearchParams]);

  return (
    <ManufactureCreateModal
      title={'edit'}
      open={!!entityId}
      onClose={handleCloseEdit}
      initValue={data}
      loadingInitData={isLoading}
      dataError={error}
    />
  );
};

export default memo(ManufactureEditModal);
