import { memo } from 'react';
import { GeneralActions } from 'layouts/portals';
import { MS_LOCATION_CONFIG } from 'settings/address-location';
import { LOCATION_TYPE } from 'modules/common/constants/location-type.enum';
import { AddHomeLocationButton } from '../AddHomeLocationButton';

const HomeDeliveryListToolbar = () => {
  return (
    <>
      <GeneralActions>
        <AddHomeLocationButton
          deliveryType={MS_LOCATION_CONFIG.isCuban ? LOCATION_TYPE.STATE : LOCATION_TYPE.COUNTRY}
        />
      </GeneralActions>
    </>
  );
};

export default memo(HomeDeliveryListToolbar);
