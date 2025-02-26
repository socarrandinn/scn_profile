import { HeadCell, Table } from '@dfl/mui-admin-layout';
import { Box, useTheme } from '@mui/material'
import { memo } from 'react';
import { SearchResponseType } from '@dfl/react-security';

export type TableProps = {
  data: SearchResponseType<any[]>;
  isLoading: boolean;
  error: any;
  renderSubTable?: (row: any, index: number) => JSX.Element;
  columns: HeadCell[];
}

const DeliveryContainerTable = ({ data, isLoading, error, columns, renderSubTable }: TableProps) => {
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
        columns={columns || []}
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
