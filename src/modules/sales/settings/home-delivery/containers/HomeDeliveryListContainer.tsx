import { memo } from 'react';
import { useFindHomeDeliveryPlaces } from 'modules/sales/settings/home-delivery/hooks/useFindHomeDeliveryPlaces';
import { HomeDeliveryListToolbar } from 'modules/sales/settings/home-delivery/components/HomeDeliveryListToolbar';
import { ConditionContainer } from '@dfl/mui-react-common';
import EmptyLocationSkeleton from '../../common/components/EmptyLocations/EmptyLocationsSkeleton';
import HomeDeliveryEditModal from './HomeDeliveryEditModal';
import { MS_LOCATION_CONFIG } from 'settings/address-location';
import { LOCATION_TYPE } from 'modules/common/constants/location-type.enum';
import DeliveryContainerTable from '../../common/containers/DeliveryContainerTable';
import EmptyHomeDeliveryContainer from './EmptyHomeDeliveryContainer';
import { homeDeliveryColumns } from '../constants/home-delivery.columns';
import HomeDeliverySubTable from '../components/HomeDeliverySubTable/HomeDeliverySubTable';

const HomeDeliveryListContainer = () => {
  const { isLoading, error, data } = useFindHomeDeliveryPlaces(MS_LOCATION_CONFIG.isCuban ? LOCATION_TYPE.STATE : LOCATION_TYPE.COUNTRY);

  if (isLoading) return <EmptyLocationSkeleton />

  return (
    <>
      <ConditionContainer active={data?.data?.length} alternative={<EmptyHomeDeliveryContainer />}>
        <HomeDeliveryListToolbar />
        <DeliveryContainerTable
          data={data}
          error={error}
          renderSubTable={HomeDeliverySubTable}
          columns={homeDeliveryColumns}
          isLoading={isLoading}
        />
      </ConditionContainer>
      <HomeDeliveryEditModal />
    </>
  );
};

export default memo(HomeDeliveryListContainer);
