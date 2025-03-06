import { Table } from '@dfl/mui-admin-layout';
import { useFindHomeDeliveryPlaces } from 'modules/sales/settings/home-delivery/hooks/useFindHomeDeliveryPlaces';
import { IDelivery } from 'modules/sales/settings/common/interfaces';
import { memo } from 'react';
import { Box } from '@mui/material';
import { LOCATION_TYPE } from 'modules/common/constants/location-type.enum';
import { homeDeliveryColumns } from '../../constants/home-delivery.columns';

type Props = {
  row: IDelivery | undefined;
};

const HomeDeliveryCityByProvinceTable = ({ row }: Props) => {
  const { data, isLoading, error } = useFindHomeDeliveryPlaces(LOCATION_TYPE.MUNICIPALITY, undefined, row?.location?.state);

  const modifiedColumns = [
    { field: 'empty', headerName: '', sortable: false, renderCell: () => null },
    ...homeDeliveryColumns
  ];

  console.log(data, 'customPrice');

  return (
    <>
      <Box sx={{
        '.MuiTableHead-root': { display: 'none' },
        '.MuiTableCell-root:first-of-type': { width: '61.98px !important' },
      }}>
        <Table
          key={row?._id}
          data={data?.data}
          error={error}
          isLoading={isLoading}
          total={data?.total || 0}
          columns={modifiedColumns}
          hidePagination
        />
      </Box>
    </>

  )
};

export default memo(HomeDeliveryCityByProvinceTable);
