import { BasicTable, HeadCell } from '@dfl/mui-admin-layout';
import { Box } from '@mui/material';
import { memo } from 'react';

export interface BasicTableProps {
  columns: HeadCell[];
  data: any[];
  isLoading?: boolean;
  error?: any;
  minWidth?: number | string;
  sxProps?: any;
}

const BasicTableHeadless = (props: BasicTableProps) => {
  return (
    <Box
      sx={{
        '& .MuiTableHead-root': {
          display: 'none !important',
        },
        '& .MuiTable-root': {
          minWidth: props.minWidth || 400,
        },
        '&  .MuiTableCell-root': {
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
        },
        ...props.sxProps,
      }}
    >
      <BasicTable {...props} />
    </Box>
  );
};

export default memo(BasicTableHeadless);
