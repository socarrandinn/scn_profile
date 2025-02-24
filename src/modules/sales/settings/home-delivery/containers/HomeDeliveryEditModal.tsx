import { memo, useCallback, useMemo } from 'react';
import HomeDeliveryCreateModal from 'modules/sales/settings/home-delivery/containers/HomeDeliveryCreateModal';
import { useSearchParams } from 'react-router-dom';
import { IHomeDelivery } from '../interfaces';
import { COST_TYPE } from '../../common/constants/cost-type.enum';

const HomeDeliveryEditModal = ({ initValue }: { initValue?: IHomeDelivery[] }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const entityId = searchParams.get('edit');

  const initValues = useMemo(() => {
    if (initValue) {
      return initValue.find((item) => item?._id === entityId);
    }
  }, [entityId, initValue]);

  const handleCloseEdit = useCallback(() => {
    const params = Object.fromEntries(searchParams.entries());
    delete params.edit;
    setSearchParams(params);
  }, [searchParams, setSearchParams]);

  return (
    <HomeDeliveryCreateModal
      title={'edit'}
      open={!!entityId}
      initValue={{ ...initValues, customPrice: COST_TYPE.CUSTOM }}
      onClose={handleCloseEdit}
    />
  );
};

export default memo(HomeDeliveryEditModal);
