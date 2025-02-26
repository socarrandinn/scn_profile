import { memo } from 'react';
import { ExpressDeliveryListToolbar } from 'modules/sales/settings/express-delivery/components/ExpressDeliveryListToolbar';
import { ConditionContainer } from '@dfl/mui-react-common';
import DeliveryContainerTable from '../../common/containers/DeliveryContainerTable';
import { useFindExpressDeliveryPlaces } from '../hooks/useFindExpressDeliveryPlaces';
import { LOCATION_TYPE } from 'modules/common/constants/location-type.enum';
import { MS_LOCATION_CONFIG } from 'settings/address-location';
import EmptyExpressDeliveryContainer from './EmptyExpressDeliveryContainer';
import ExpressDeliveryEditModal from './ExpressDeliveryEditModal';
import { expressDeliveryColumns } from '../constants';
import { ExpressDeliverySubTable } from '../components/ExpressDeliverySubTable';

const ExpressDeliveryListContainer = () => {
  const { isLoading, error, data } = useFindExpressDeliveryPlaces(MS_LOCATION_CONFIG.isCuban ? LOCATION_TYPE.STATE : LOCATION_TYPE.COUNTRY);

  return (
    <>
      <ConditionContainer active={data?.data?.length} alternative={<EmptyExpressDeliveryContainer />}>
        <ExpressDeliveryListToolbar />
        <DeliveryContainerTable
          data={data}
          error={error}
          renderSubTable={ExpressDeliverySubTable}
          columns={expressDeliveryColumns}
          isLoading={isLoading}
        />
      </ConditionContainer>
      <ExpressDeliveryEditModal />
    </>
  );
};

export default memo(ExpressDeliveryListContainer);
