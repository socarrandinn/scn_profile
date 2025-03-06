import { memo, useCallback, useMemo } from 'react';
import HomeDeliveryCreateModal from 'modules/sales/settings/home-delivery/containers/HomeDeliveryCreateModal';
import { useSearchParams } from 'react-router-dom';
import { IDelivery } from 'modules/sales/settings/common/interfaces'
import { COST_TYPE } from '../../common/constants/cost-type.enum';
import { SearchResponseType } from '@dfl/react-security';

const HomeDeliveryEditModal = ({ data }: { data: SearchResponseType<IDelivery> }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const entityId = searchParams.get('edit');


  const initValues = useMemo(() => {
    if (data?.data && entityId) {
      return data?.data?.find((item: IDelivery) => item?._id === entityId);
    }
  }, [entityId, data?.data]);

  const handleCloseEdit = useCallback(() => {
    const params = Object.fromEntries(searchParams.entries());
    delete params.edit;
    setSearchParams(params);
  }, [searchParams, setSearchParams]);

  return (
    <HomeDeliveryCreateModal
      title={'edit'}
      open={!!entityId}
      initValue={entityId ? { ...initValues, customPrice: COST_TYPE.CUSTOM } : undefined}
      onClose={handleCloseEdit}
    />
  );
};

export default memo(HomeDeliveryEditModal);
