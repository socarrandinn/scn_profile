import { Table } from '@dfl/mui-admin-layout';
import { IDelivery } from 'modules/sales/settings/common/interfaces';
import { memo } from 'react';
import { Box } from '@mui/material';
import { LOCATION_TYPE } from 'modules/common/constants/location-type.enum';
import { useFindExpressDeliveryPlaces } from '../../hooks/useFindExpressDeliveryPlaces';
import { expressDeliveryColumns } from '../../constants';

type Props = {
  row: IDelivery | undefined;
};

const ExpressDeliveryCityByProvinceTable = ({ row }: Props) => {
  const { data, isLoading, error } = useFindExpressDeliveryPlaces(LOCATION_TYPE.MUNICIPALITY, undefined, row?.location?.state);

  return (
    <Box sx={{ '.MuiTableHead-root': { display: 'none', }, paddingLeft: '66px' }}>
      <Table
        key={row?._id}
        data={data?.data}
        error={error}
        isLoading={isLoading}
        total={data?.total || 0}
        columns={expressDeliveryColumns}
        hidePagination
      />
    </Box>
  )
};

export default memo(ExpressDeliveryCityByProvinceTable);
