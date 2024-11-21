import { ChildrenProps } from '@dfl/mui-react-common';
import { Box } from '@mui/material';
import { memo } from 'react';

const CustomWidthTable = ({ children: table, minWidth = 600 }: ChildrenProps & { minWidth?: number }) => {
  return (
    <Box
      sx={{
        '& .MuiTable-root': {
          minWidth,
        },
      }}
    >
      {table}
    </Box>
  );
};

export default memo(CustomWidthTable);
