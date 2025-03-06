import { Box } from '@mui/material';
import { IDelivery } from 'modules/sales/settings/common/interfaces'
import { MS_LOCATION_CONFIG } from 'settings/address-location';
import ProvinceByCountryTable from 'modules/sales/settings/common/components/ProvinceByCountryTable/ProvinceByCountryTable';
import { LOCATION_TYPE } from 'modules/common/constants/location-type.enum';
import { homeDeliveryColumns } from '../../constants/home-delivery.columns';
import HomeDeliveryCityByProvinceTable from '../HomeDeliveryCityByProvinceTable/HomeDeliveryCityByProvinceTable';
import { useFindHomeDeliveryPlaces } from '../../hooks/useFindHomeDeliveryPlaces';
const cityByProvinceRenderSubTable = (row: IDelivery | undefined, index: number) => {
  return <HomeDeliveryCityByProvinceTable key={index} row={row} />;
};

const HomeDeliverySubTable = (row: IDelivery | undefined, index: number) => {
  const { data, isLoading, error } = useFindHomeDeliveryPlaces(LOCATION_TYPE.STATE, row?.location?.country);

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
      {MS_LOCATION_CONFIG.isCuban ? (
        <HomeDeliveryCityByProvinceTable row={row} key={index} />
      ) : (
        <ProvinceByCountryTable
          row={row}
          key={index}
          data={data}
          isLoading={isLoading}
          error={error}
          renderSubTable={cityByProvinceRenderSubTable}
          columns={homeDeliveryColumns}
        />
      )}
    </Box>
  );
};

export default HomeDeliverySubTable;
