import { ADDRESS_COUNTRY_CODE } from 'settings/address-location';
import { useFindHomeDeliveryPlaces } from '../hooks/useFindHomeDeliveryPlaces';
import { LOCATION_TYPE } from 'modules/common/constants/location-type.enum';
import HomeDeliveryEditModal from './HomeDeliveryEditModal';
import { memo } from 'react';
import { homeDeliveryColumns } from '../constants/home-delivery.columns';
import LocationsTableContainer from '../../common/containers/LocationsTableContainer';

const HomeDeliveryListContainer = () => {
  const { isLoading, error, data } = useFindHomeDeliveryPlaces(ADDRESS_COUNTRY_CODE === 'CU' ? LOCATION_TYPE.STATE : LOCATION_TYPE.COUNTRY);

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

export default memo(HomeDeliveryListContainer);
