import { LOCATION_TYPE } from 'modules/common/constants/location-type.enum';
import DeliveryContainerTable from 'modules/sales/settings/common/containers/DeliveryContainerTable';
import { HomeDeliverySubTable } from 'modules/sales/settings/home-delivery/components/HomeDeliverySubTable';
import { homeDeliveryCenterColumns } from 'modules/sales/settings/home-delivery/constants/home-delivery.columns';
import { useFindHomeDeliveryPlaces } from 'modules/sales/settings/home-delivery/hooks/useFindHomeDeliveryPlaces';
import { memo, Suspense } from 'react';
import { ADDRESS_COUNTRY_CODE } from 'settings/address-location';

const DistributionCentersGeneralLocationsDetails = () => {
  const { isLoading, error, data } = useFindHomeDeliveryPlaces(ADDRESS_COUNTRY_CODE === 'CU' ? LOCATION_TYPE.STATE : LOCATION_TYPE.COUNTRY);

  return (
    <>
      <DeliveryContainerTable
        data={data}
        error={error}
        renderSubTable={(row, index) => (
          <Suspense fallback={<></>}>
            <HomeDeliverySubTable row={row} index={index} />
          </Suspense>
        )}
        columns={homeDeliveryCenterColumns}
        isLoading={isLoading}
      />
    </>
  );
};

export default memo(DistributionCentersGeneralLocationsDetails);
