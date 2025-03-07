import { memo, useCallback } from 'react';
import HomeDeliveryCreateModal from 'modules/sales/settings/home-delivery/containers/HomeDeliveryCreateModal';
import { useSearchParams } from 'react-router-dom';
import { useFindShippingSettings } from '../hooks/useFindShippingSettings';
import { COST_TYPE } from '../../common/constants';

const HomeDeliveryEditModal = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const entityId = searchParams.get('edit');
  const { data, isLoading } = useFindShippingSettings(entityId);

  const handleCloseEdit = useCallback(() => {
    const params = Object.fromEntries(searchParams.entries());
    delete params.edit;
    setSearchParams(params);
  }, [searchParams, setSearchParams]);

  return (
    <HomeDeliveryCreateModal
      title={'edit'}
      loadingInitData={isLoading}
      open={!!entityId}
      initValue={{ ...data?.data?.[0], customPrice: data?.data?.[0]?.customPrice === false ? COST_TYPE.BASE : COST_TYPE.CUSTOM }}
      onClose={handleCloseEdit}
    />
  );
};

export default memo(HomeDeliveryEditModal);
