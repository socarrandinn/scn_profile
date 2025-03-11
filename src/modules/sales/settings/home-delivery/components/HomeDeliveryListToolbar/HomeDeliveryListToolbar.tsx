import { memo } from 'react';
import { GeneralActions } from 'layouts/portals';
import { ADDRESS_COUNTRY_CODE } from 'settings/address-location';
import { LOCATION_TYPE } from 'modules/common/constants/location-type.enum';
import { AddLocationButton } from '../AddLocationButton';

const HomeDeliveryListToolbar = () => {
  return (
    <>
      <GeneralActions>
        <AddLocationButton
          deliveryType={ADDRESS_COUNTRY_CODE === 'CU' ? LOCATION_TYPE.STATE : LOCATION_TYPE.COUNTRY}
        />
      </GeneralActions>
    </>
  );
};

export default memo(HomeDeliveryListToolbar);
