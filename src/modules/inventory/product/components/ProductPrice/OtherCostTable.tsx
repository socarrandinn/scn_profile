import { Table } from '@dfl/mui-admin-layout';
import { memo } from 'react';
import { otherCostColumns } from './other-cost.columns';
import { IOtherCost } from '../../interfaces/IProductPriceDetails';
import { Box } from '@mui/material';
type OtherCostTableProps = {
  otherPrices: IOtherCost[];
};

const OtherCostTable = ({ otherPrices }: OtherCostTableProps) => {
  if (!otherPrices?.length) return null;
  return (
    <Box
      sx={{
        '& .MuiTable-root': {
          minWidth: 400,
        },
      }}
    >
      <Table columns={otherCostColumns} data={otherPrices} total={otherPrices?.length} hidePagination />
    </Box>
  );
};

export default memo(OtherCostTable);
