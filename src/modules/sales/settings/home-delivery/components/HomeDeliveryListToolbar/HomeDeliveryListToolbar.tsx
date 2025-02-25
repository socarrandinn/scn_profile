import { memo } from 'react';
import { GeneralActions } from 'layouts/portals';
import { AddLocationButton } from 'modules/sales/settings/common/components/AddLocationButton';
import { MS_LOCATION_CONFIG } from 'settings/address-location';
import { LOCATION_TYPE } from 'modules/common/constants/location-type.enum';


const HomeDeliveryListToolbar = () => {
  return (
    <>
      {/* <TableToolbar
        selectActions={
          <Stack direction={'row'} spacing={1}>
            <DeleteRowAction isLoading={isLoading} onDelete={mutate} />
          </Stack>
        }
      >
        <TableToolbarActions settings={settings} />
      </TableToolbar> */}
      <GeneralActions>
        <AddLocationButton
          deliveryType={MS_LOCATION_CONFIG.isCuban ? LOCATION_TYPE.STATE : LOCATION_TYPE.COUNTRY}
        />
      </GeneralActions>
    </>
  );
};

export default memo(HomeDeliveryListToolbar);
