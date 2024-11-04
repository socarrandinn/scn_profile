import { BasicTable, HeadCell } from '@dfl/mui-admin-layout';
import { Box } from '@mui/material';
import { memo } from 'react';

export interface BasicTableProps {
  columns: HeadCell[];
  data: any[];
  isLoading?: boolean;
  error?: any;
}

const BasicTableHeadless = (props: BasicTableProps) => {
  return (
    <Box
      sx={{
        '& .MuiTableHead-root': {
          display: 'none !important',
        },
        '& .MuiTable-root': {
          minWidth: 400,
        },
        width: '100%',
      }}
    >
      <BasicTable {...props} />
    </Box>
  );
};

export default memo(BasicTableHeadless);
