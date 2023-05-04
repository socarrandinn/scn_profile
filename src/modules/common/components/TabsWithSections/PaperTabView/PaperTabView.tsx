import { memo } from 'react';
import { Paper } from '@mui/material';
import { ChildrenProps } from '@dfl/mui-react-common';

export type PaperTabViewProps = ChildrenProps & { firsts?: boolean; nm?: boolean; sx?: any };

const common = { padding: { xs: 2, md: 4 } };
const firstsX = {
  ...common,
  borderTopLeftRadius: 0,
  borderTopRightRadius: 0,
};

const normalSx = {
  ...common,
  marginTop: 2,
};
const PaperTabView = ({ children, firsts, nm, sx }: PaperTabViewProps) => {
  const customSx = firsts ? firstsX : nm ? common : normalSx;
  return <Paper sx={{ ...customSx, ...sx }}>{children}</Paper>;
};

export default memo(PaperTabView);
