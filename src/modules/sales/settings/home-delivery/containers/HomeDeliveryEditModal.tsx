import { memo, useCallback } from 'react';
import HomeDeliveryCreateModal from 'modules/sales/settings/home-delivery/containers/HomeDeliveryCreateModal';
import { useSearchParams } from 'react-router-dom';
import { useFindShippingSettings } from '../hooks/useFindShippingSettings';

const HomeDeliveryEditModal = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const entityId = searchParams.get('edit');
  const { data } = useFindShippingSettings(entityId);

  const handleCloseEdit = useCallback(() => {
    const params = Object.fromEntries(searchParams.entries());
    delete params.edit;
    setSearchParams(params);
  }, [searchParams, setSearchParams]);

  return (
    <HomeDeliveryCreateModal
      title={'edit'}
      open={!!entityId}
      initValue={data?.data?.[0]}
      onClose={handleCloseEdit}
    />
  );
};

export default memo(HomeDeliveryEditModal);
