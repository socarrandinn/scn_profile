import { MS_LOCATION_CONFIG } from 'settings/address-location';
import { LOCATION_TYPE } from 'modules/common/constants/location-type.enum';
import { memo } from 'react';
import LocationsTableContainer from 'modules/sales/settings/common/containers/LocationsTableContainer';
import HomeDeliveryEditModal from 'modules/sales/settings/home-delivery/containers/HomeDeliveryEditModal';
import { homeDeliveryColumns } from 'modules/sales/settings/home-delivery/constants/home-delivery.columns';
import { useFindHomeDeliveryPlaces } from 'modules/sales/settings/home-delivery/hooks/useFindHomeDeliveryPlaces';

const DistributionCenterLocationsContainer = () => {
  const { isLoading, error, data } = useFindHomeDeliveryPlaces(MS_LOCATION_CONFIG.isCuban ? LOCATION_TYPE.STATE : LOCATION_TYPE.COUNTRY);

  return (
    <>
      <LocationsTableContainer
        columns={homeDeliveryColumns}
        data={data}
        error={error}
        isLoading={isLoading}
      />
      <HomeDeliveryEditModal />
    </>
  );
};

export default memo(DistributionCenterLocationsContainer);
