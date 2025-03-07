import { memo } from 'react';
import { GeneralActions } from 'layouts/portals';
import { MS_LOCATION_CONFIG } from 'settings/address-location';
import { LOCATION_TYPE } from 'modules/common/constants/location-type.enum';
import { AddLocationButton } from '../AddLocationButton';

const HomeDeliveryListToolbar = () => {
  return (
    <>
      <GeneralActions>
        <AddLocationButton
          deliveryType={MS_LOCATION_CONFIG.isCuban ? LOCATION_TYPE.STATE : LOCATION_TYPE.COUNTRY}
        />
      </GeneralActions>
    </>
  );
};

export default memo(HomeDeliveryListToolbar);
