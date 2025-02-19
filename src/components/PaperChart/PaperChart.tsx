import { memo } from 'react';
import { ChildrenProps } from '@dfl/mui-react-common';
import { Paper } from '@mui/material';

export const sxD = { paddingY: { xs: 1, md: 3 }, paddingX: 2, width: '100%' };
const PaperChart = ({ children, sx }: ChildrenProps & { sx?: any }) => {
  return <Paper sx={{ ...sxD, ...sx }}>{children}</Paper>;
};

export default memo(PaperChart);
