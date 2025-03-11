import { Table } from '@dfl/mui-admin-layout';
import { IDelivery } from 'modules/sales/settings/common/interfaces';
import { memo } from 'react';
import { Box } from '@mui/material';
import { HomeDeliveryCityByProvinceTable } from 'modules/sales/settings/home-delivery/components/HomeDeliveryCityByProvinceTable';
import { useFindHomeDeliveryPlaces } from 'modules/sales/settings/home-delivery/hooks/useFindHomeDeliveryPlaces';
import { LOCATION_TYPE } from 'modules/common/constants/location-type.enum';
import { homeDeliveryColumns } from 'modules/sales/settings/home-delivery/constants/home-delivery.columns';
import { EmptyResultCmp } from 'modules/common/components/EmptyResultCmp';

type Props = {
  row: IDelivery | undefined;
};

const cityByProvinceRenderSubTable = (row: IDelivery | undefined, index: number) => {
  return <HomeDeliveryCityByProvinceTable key={index} row={row} />;
};

const ProvinceByCountryTable = ({ row }: Props) => {
  const { data, isLoading, error } = useFindHomeDeliveryPlaces(LOCATION_TYPE.STATE, row?.location?.country);

  return (
    <Box sx={{
      '.MuiTableHead-root': { display: 'none' },
      '.MuiBox-root': { background: '#F7FBF5', marginTop: 0 },
      '.MuiTableCell-root:first-of-type': { width: '65.98px !important' }
    }}>
      <Table
        key={row?._id}
        data={data?.data}
        error={error}
        isLoading={isLoading}
        total={data?.total || 0}
        renderCollapsibleRowContent={cityByProvinceRenderSubTable}
        columns={homeDeliveryColumns}
        hidePagination
        emptyResultCmp={EmptyResultCmp}
      />
    </Box>
  )
};

export default memo(ProvinceByCountryTable);
