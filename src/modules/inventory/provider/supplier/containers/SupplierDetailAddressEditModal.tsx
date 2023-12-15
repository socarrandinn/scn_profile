import { memo, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useFindOneManufacture } from 'modules/inventory/provider/manufacture/hooks/useFindOneManufacture';
import SupplierDetailAddressCreateModal from './SupplierDetailAddressCreateModal';

const SupplierDetailAddressEditModal = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const entityId = searchParams.get('edit');
  const { isLoading, data, error } = useFindOneManufacture(entityId);
  const handleCloseEdit = useCallback(() => {
    const params = Object.fromEntries(searchParams.entries());
    delete params.edit;
    setSearchParams(params);
  }, [searchParams, setSearchParams]);

  return (
    <SupplierDetailAddressCreateModal
      title={'edit'}
      open={!!entityId}
      onClose={handleCloseEdit}
      initValue={data}
      loadingInitData={isLoading}
      dataError={error}
    />
  );
};

export default memo(SupplierDetailAddressEditModal);
