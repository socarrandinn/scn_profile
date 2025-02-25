import { Table } from '@dfl/mui-admin-layout';
import { Box, useTheme } from '@mui/material'
import { shippingColumns } from '../constants/shipping-columns';
import { MS_LOCATION_CONFIG } from 'settings/address-location';
import { CityByProvinceTable } from '../components/CityByProvinceTable';
import ProvinceByCountryTable from '../components/CityByProvinceTable/ProvinceByCountryTable';
import { IDelivery } from '../../home-delivery/interfaces';
import { memo } from 'react';
import { SearchResponseType } from '@dfl/react-security';

const renderSubTable = (row: IDelivery | undefined, index: number) => {
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
      {MS_LOCATION_CONFIG.isCuban ? <CityByProvinceTable row={row} key={index} /> : <ProvinceByCountryTable row={row} key={index} />}
    </Box>
  );
};

export type TableProps = {
  data: SearchResponseType<any[]>;
  isLoading: boolean;
  error: any;
}

const DeliveryContainerTable = ({ data, isLoading, error }: TableProps) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        mt: 2,
        '.MuiTableRow-head': { background: theme.palette.primary.contrastText },
        '.MuiTableBody-root': { background: '#E5F2DF' },
        '[data-testid="KeyboardArrowDownIcon"], [data-testid="KeyboardArrowUpIcon"]': {
          background: theme.palette.success.main,
          opacity: 0.4,
          color: 'white',
          borderRadius: '25px',
          '&:hover': {
            background: theme.palette.primary.dark,
          },
        },
      }}>
      <Table
        columns={shippingColumns}
        data={data?.data}
        total={data?.total}
        isLoading={isLoading}
        error={error}
        renderCollapsibleRowContent={renderSubTable}
      />
    </Box>
  )
};

export default memo(DeliveryContainerTable);
