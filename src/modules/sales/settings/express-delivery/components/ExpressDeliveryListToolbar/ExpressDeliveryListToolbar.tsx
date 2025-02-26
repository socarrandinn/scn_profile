import { memo } from 'react';
import { GeneralActions } from 'layouts/portals';
import AddExpressLocationButton from 'modules/sales/settings/express-delivery/components/AddExpressLocationButton/AddExpressLocationButton';
import { LOCATION_TYPE } from 'modules/common/constants/location-type.enum';
import { MS_LOCATION_CONFIG } from 'settings/address-location';

const ExpressDeliveryListToolbar = () => {
  return (
    <>
      <GeneralActions>
        <AddExpressLocationButton deliveryType={MS_LOCATION_CONFIG.isCuban ? LOCATION_TYPE.STATE : LOCATION_TYPE.COUNTRY} />
      </GeneralActions>
    </>
  );
};

export default memo(ExpressDeliveryListToolbar);
