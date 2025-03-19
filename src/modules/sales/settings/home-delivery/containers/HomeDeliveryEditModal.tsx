import { memo, useCallback, useMemo } from 'react';
import HomeDeliveryCreateModal from 'modules/sales/settings/home-delivery/containers/HomeDeliveryCreateModal';
import { useSearchParams } from 'react-router-dom';
import { useFindShippingSettings } from '../hooks/useFindShippingSettings';
import { COST_TYPE } from '../../common/constants';
import { emptyDelivery } from '../constants/empty-delivery';

const HomeDeliveryEditModal = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const entityId = searchParams.get('edit');
  const { data, isLoading, error } = useFindShippingSettings(entityId);

  const handleCloseEdit = useCallback(() => {
    const params = Object.fromEntries(searchParams.entries());
    delete params.edit;
    setSearchParams(params);
  }, [searchParams, setSearchParams]);

  const initValues = useMemo(() => {
    if (data?.data?.[0]) {
      return { ...data?.data?.[0], customPrice: data?.data?.[0]?.customPrice === true ? COST_TYPE.CUSTOM : COST_TYPE.BASE }
    }
    return emptyDelivery
  }, [data?.data?.[0]]);

  return (
    <HomeDeliveryCreateModal
      title={'edit'}
      loadingInitData={isLoading || !initValues?._id}
      open={!!entityId}
      dataError={error}
      initValue={initValues}
      onClose={handleCloseEdit}
    />
  );
};

export default memo(HomeDeliveryEditModal);
