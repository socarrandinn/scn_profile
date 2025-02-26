import { MS_LOCATION_CONFIG } from 'settings/address-location';
import { DeliveryDisabled } from '../../common/components/DeliveryDisabled';
import { EmptyLocations } from '../../common/components/EmptyLocations';
import EmptyLocationSkeleton from '../../common/components/EmptyLocations/EmptyLocationsSkeleton';
import { LOCATION_TYPE } from 'modules/common/constants/location-type.enum';
import { useShippingExpressSettings } from '../contexts/ShippingExpressDetail';
import AddExpressLocationButton from '../../common/components/AddLocationButton/AddExpressLocationButton';

const EmptyExpressDeliveryContainer = () => {
  const { settings, isLoading } = useShippingExpressSettings();

  if (isLoading) return <EmptyLocationSkeleton />

  if (!settings?.enabled) return <DeliveryDisabled />;

  return <EmptyLocations button={<AddExpressLocationButton deliveryType={MS_LOCATION_CONFIG.isCuban ? LOCATION_TYPE.STATE : LOCATION_TYPE.COUNTRY} />} />
};

export default (EmptyExpressDeliveryContainer);
