import { MS_LOCATION_CONFIG } from 'settings/address-location';
import { DeliveryDisabled } from '../../common/components/DeliveryDisabled';
import { EmptyLocations } from '../../common/components/EmptyLocations';
import EmptyLocationSkeleton from '../../common/components/EmptyLocations/EmptyLocationsSkeleton';
import { useShippingHomeSettings } from '../contexts';
import { LOCATION_TYPE } from 'modules/common/constants/location-type.enum';
import { AddLocationButton } from '../components/AddLocationButton';

const EmptyHomeDeliveryContainer = () => {
  const { settings, isLoading } = useShippingHomeSettings();

  if (isLoading) return <EmptyLocationSkeleton />

  if (!settings?.enabled) return <DeliveryDisabled />;

  return <EmptyLocations button={<AddLocationButton deliveryType={MS_LOCATION_CONFIG.isCuban ? LOCATION_TYPE.STATE : LOCATION_TYPE.COUNTRY} />} />
};

export default (EmptyHomeDeliveryContainer);
