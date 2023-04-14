import { memo } from 'react';
import { Paper } from '@mui/material';
import { ChildrenProps } from '@dfl/mui-react-common';

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
const PaperTabView = ({ children, firsts }: ChildrenProps & { firsts?: boolean }) => {
  return <Paper sx={firsts ? firstsX : normalSx}>{children}</Paper>;
};

export default memo(PaperTabView);
