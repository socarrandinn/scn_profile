import { memo } from 'react';
import { ChildrenProps } from '@dfl/mui-react-common';
import { Paper } from '@mui/material';

export const sxD = { padding: 2, width: '100%' };
const PaperChart = ({ children, sx }: ChildrenProps & { sx?: any }) => {
  return <Paper sx={{ ...sxD, ...sx }}>{children}</Paper>;
};

export default memo(PaperChart);
