import { memo, useCallback } from 'react';
import AdvertisementCreateModal from 'modules/rrhh/advertisement/containers/AdvertisementCreateModal';
import { useSearchParams } from 'react-router-dom';
import { useFindOneAdvertisement } from 'modules/rrhh/advertisement/hooks/useFindOneAdvertisement';

const AdvertisementEditModal = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const entityId = searchParams.get('edit');
  const { isLoading, data, error } = useFindOneAdvertisement(entityId);
  const handleCloseEdit = useCallback(() => {
    const params = Object.fromEntries(searchParams.entries());
    delete params.edit;
    setSearchParams(params);
  }, [searchParams, setSearchParams]);

  return (
    <AdvertisementCreateModal
      title={'edit'}
      open={!!entityId}
      onClose={handleCloseEdit}
      initValue={data}
      loadingInitData={isLoading}
      dataError={error}
    />
  );
};

export default memo(AdvertisementEditModal);
