import { memo } from 'react';
import { LocationsList } from '../pages';
import DeliverySettingsGlobal from '../components/DeliverySettingsGlobal/DeliverySettingsGlobal';

const HomeDeliverySettingsContainer = () => {
  return (
    <>
      <DeliverySettingsGlobal />
      <LocationsList />
    </>
  );
};

export default memo(HomeDeliverySettingsContainer);
