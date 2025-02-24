import { Table } from '@dfl/mui-admin-layout';
import { useFindHomeDeliveryPlaces } from 'modules/sales/settings/home-delivery/hooks/useFindHomeDeliveryPlaces';
import { IHomeDelivery } from 'modules/sales/settings/home-delivery/interfaces';
import { memo } from 'react';
import { shippingColumns } from '../../constants/shipping-columns';
import { Box } from '@mui/material';

type Props = {
  row: IHomeDelivery | undefined;
};


const CityByProvinceTable = ({ row }: Props) => {
  const { data, isLoading, error } = useFindHomeDeliveryPlaces();

  return (
    <Box sx={{ '.MuiTableHead-root': { display: 'none', }, paddingLeft: '66px' }}>
      <Table
        key={row?._id}
        data={[row]}
        error={error}
        isLoading={isLoading}
        total={data?.total || 0}
        columns={shippingColumns}
        hidePagination
      />
    </Box>
  )
};

export default memo(CityByProvinceTable);
