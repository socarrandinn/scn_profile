import { Table } from '@dfl/mui-admin-layout';
import { IDelivery } from 'modules/sales/settings/common/interfaces';
import { memo } from 'react';
import { Box } from '@mui/material';
import { TableProps } from '../../containers/DeliveryContainerTable';
import { EmptyResultCmp } from 'modules/common/components/EmptyResultCmp';

type Props = TableProps & {
  row: IDelivery | undefined;
};

const ProvinceByCountryTable = ({ row, data, isLoading, error, columns, renderSubTable }: Props) => {
  return (
    <Box sx={{ '.MuiTableHead-root': { display: 'none' }, '.MuiTableCell-root:first-of-type': { width: '65.98px !important' } }}>
      <Table
        key={row?._id}
        data={data?.data}
        error={error}
        isLoading={isLoading}
        total={data?.total || 0}
        columns={columns || []}
        renderCollapsibleRowContent={renderSubTable}
        hidePagination
        emptyResultCmp={EmptyResultCmp}
      />
    </Box>
  )
};

export default memo(ProvinceByCountryTable);
