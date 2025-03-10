import { Box } from '@mui/material';
import { IDelivery } from 'modules/sales/settings/common/interfaces'
import { MS_LOCATION_CONFIG } from 'settings/address-location';
import ProvinceByCountryTable from 'modules/sales/settings/common/components/ProvinceByCountryTable/ProvinceByCountryTable';
import HomeDeliveryCityByProvinceTable from '../HomeDeliveryCityByProvinceTable/HomeDeliveryCityByProvinceTable';


const HomeDeliverySubTable = ({ row, index }: { row: IDelivery | undefined; index: number }) => {
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
        <ProvinceByCountryTable row={row} key={index} />
      )}
    </Box>
  );
};

export default HomeDeliverySubTable;
