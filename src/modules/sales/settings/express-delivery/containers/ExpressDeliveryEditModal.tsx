import { memo, useCallback, useMemo } from 'react';
import ExpressDeliveryCreateModal from 'modules/sales/settings/express-delivery/containers/ExpressDeliveryCreateModal';
import { useSearchParams } from 'react-router-dom';
import { useFindExpressDeliveryPlaces } from '../hooks/useFindExpressDeliveryPlaces';
import { IDelivery } from '../../home-delivery/interfaces';
import { COST_TYPE } from '../../common/constants/cost-type.enum';

const ExpressDeliveryEditModal = () => {
  const { data } = useFindExpressDeliveryPlaces();
  const [searchParams, setSearchParams] = useSearchParams();
  const entityId = searchParams.get('edit');

  const initValues = useMemo(() => {
    if (data?.data) {
      return data?.data?.find((item: IDelivery) => item?._id === entityId);
    }
  }, [entityId, data?.data]);

  const handleCloseEdit = useCallback(() => {
    const params = Object.fromEntries(searchParams.entries());
    delete params.edit;
    setSearchParams(params);
  }, [searchParams, setSearchParams]);

  return (
    <ExpressDeliveryCreateModal
      title={'edit'}
      open={!!entityId}
      onClose={handleCloseEdit}
      initValue={{ ...initValues, customPrice: COST_TYPE.CUSTOM }}
    />
  );
};

export default memo(ExpressDeliveryEditModal);
