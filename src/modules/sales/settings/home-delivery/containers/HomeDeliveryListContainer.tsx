import { memo } from 'react';
import { Table } from '@dfl/mui-admin-layout';
import { useFindHomeDeliveryPlaces } from 'modules/sales/settings/home-delivery/hooks/useFindHomeDeliveryPlaces';
import { HomeDeliveryListToolbar } from 'modules/sales/settings/home-delivery/components/HomeDeliveryListToolbar';
import { ConditionContainer } from '@dfl/mui-react-common';
import EmptyLocationContainer from '../../common/containers/EmptyLocationContainer';
import EmptyLocationSkeleton from '../../common/components/EmptyLocations/EmptyLocationsSkeleton';
import { shippingColumns } from '../../common/constants/shipping-columns';
import { IHomeDelivery } from '../interfaces';
import { CityByProvinceTable } from '../../common/components/CityByProvinceTable';
import HomeDeliveryEditModal from './HomeDeliveryEditModal';
import { MS_LOCATION_CONFIG } from 'settings/address-location';
import { LOCATION_TYPE } from 'modules/common/constants/location-type.enum';
import ProvinceByCountryTable from '../../common/components/CityByProvinceTable/ProvinceByCountryTable';
import { Box, useTheme } from '@mui/material';

const renderSubTable = (row: IHomeDelivery | undefined, index: number) => {
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

const HomeDeliveryListContainer = () => {
  const theme = useTheme();
  const { isLoading, error, data } = useFindHomeDeliveryPlaces(MS_LOCATION_CONFIG.isCuban ? LOCATION_TYPE.STATE : LOCATION_TYPE.COUNTRY);

  if (isLoading) return <EmptyLocationSkeleton />

  return (
    <>
      <ConditionContainer active={data?.data?.length} alternative={<EmptyLocationContainer />}>
        <HomeDeliveryListToolbar />
        <Box sx={{
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
      </ConditionContainer>
      <HomeDeliveryEditModal />
    </>
  );
};

export default memo(HomeDeliveryListContainer);
