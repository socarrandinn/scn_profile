import { MS_LOCATION_CONFIG } from 'settings/address-location';
import { useFindHomeDeliveryPlaces } from '../hooks/useFindHomeDeliveryPlaces';
import { LOCATION_TYPE } from 'modules/common/constants/location-type.enum';
import EmptyLocationSkeleton from '../../common/components/EmptyLocations/EmptyLocationsSkeleton';
import { ConditionContainer } from '@dfl/mui-react-common';
import EmptyHomeDeliveryContainer from './EmptyHomeDeliveryContainer';
import { HomeDeliveryListToolbar } from '../components/HomeDeliveryListToolbar';
import DeliveryContainerTable from '../../common/containers/DeliveryContainerTable';
import { HomeDeliverySubTable } from '../components/HomeDeliverySubTable';
import HomeDeliveryEditModal from './HomeDeliveryEditModal';
import { memo } from 'react';
import { homeDeliveryColumns } from '../constants/home-delivery.columns';

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
