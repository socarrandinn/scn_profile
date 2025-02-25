import { Box } from '@mui/material';
import { MS_LOCATION_CONFIG } from 'settings/address-location';
import ProvinceByCountryTable from 'modules/sales/settings/common/components/ProvinceByCountryTable/ProvinceByCountryTable';
import { LOCATION_TYPE } from 'modules/common/constants/location-type.enum';
import { useFindExpressDeliveryPlaces } from '../../hooks/useFindExpressDeliveryPlaces';
import { HomeDeliveryCityByProvinceTable } from 'modules/sales/settings/home-delivery/components/HomeDeliveryCityByProvinceTable';
import { IDelivery } from 'modules/sales/settings/home-delivery/interfaces';
import { expressDeliveryColumns } from '../../constants';
import { ExpressDeliveryCityByProvinceTable } from '../ExpressDeliveryCityByProvinceTable';

const cityByProvinceRenderSubTable = (row: IDelivery | undefined, index: number) => {
  return <ExpressDeliveryCityByProvinceTable key={index} row={row} />;
};

const ExpressDeliverySubTable = (row: IDelivery | undefined, index: number) => {
  const { data, isLoading, error } = useFindExpressDeliveryPlaces(LOCATION_TYPE.STATE, row?.location?.country);

  return (
    <Box
      sx={{
        '.MuiTableBody-root': { background: '#F7FBF5 !important' },
        '[data-testid="KeyboardArrowDownIcon"], [data-testid="KeyboardArrowUpIcon"]': {
          background: 'transparent !important',
          color: '#2B3445 !important',
          opacity: 1,
        },
      }}>
      {MS_LOCATION_CONFIG.isCuban ? <ExpressDeliveryCityByProvinceTable row={row} key={index} /> : <ProvinceByCountryTable row={row} key={index} data={data} isLoading={isLoading} error={error} renderSubTable={cityByProvinceRenderSubTable} columns={expressDeliveryColumns} />}
    </Box>
  );
};

export default ExpressDeliverySubTable;