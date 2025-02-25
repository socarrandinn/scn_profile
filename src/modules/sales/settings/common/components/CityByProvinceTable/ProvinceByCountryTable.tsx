import { Table } from '@dfl/mui-admin-layout';
import { useFindHomeDeliveryPlaces } from 'modules/sales/settings/home-delivery/hooks/useFindHomeDeliveryPlaces';
import { IHomeDelivery } from 'modules/sales/settings/home-delivery/interfaces';
import { memo } from 'react';
import { shippingColumns } from '../../constants/shipping-columns';
import { Box } from '@mui/material';
import { LOCATION_TYPE } from 'modules/common/constants/location-type.enum';
import CityByProvinceTable from './CityByProvinceTable';

type Props = {
  row: IHomeDelivery | undefined;
};

const renderSubTable = (row: IHomeDelivery | undefined, index: number) => {
  return <CityByProvinceTable key={index} row={row} />;
};

const ProvinceByCountryTable = ({ row }: Props) => {
  const { data, isLoading, error } = useFindHomeDeliveryPlaces(LOCATION_TYPE.STATE, row?.location?.country);

  return (
    <Box sx={{ '.MuiTableHead-root': { display: 'none', } }}>
      <Table
        key={row?._id}
        data={data?.data}
        error={error}
        isLoading={isLoading}
        total={data?.total || 0}
        columns={shippingColumns}
        renderCollapsibleRowContent={renderSubTable}
        hidePagination
      />
    </Box>
  )
};

export default memo(ProvinceByCountryTable);
