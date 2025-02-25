import { EmptyLocations } from '../components/EmptyLocations';
import { useShippingHomeSettings } from '../../home-delivery/contexts';
import { DeliveryDisabled } from '../components/DeliveryDisabled';
import EmptyLocationSkeleton from '../components/EmptyLocations/EmptyLocationsSkeleton';

const EmptyLocationContainer = () => {
  const { settings, isLoading } = useShippingHomeSettings();

  if (isLoading) return <EmptyLocationSkeleton />

  if (!settings?.enabled) return <DeliveryDisabled />;

  return <EmptyLocations />
};

export default (EmptyLocationContainer);
