import { memo } from 'react';
import { Stack } from '@mui/material';
import { ChildrenProps } from '@dfl/mui-react-common';

type StackLayoutProps = ChildrenProps & {
  nPadding?: boolean;
  direction?: 'column' | 'column-reverse' | 'row' | 'row-reverse' | undefined;
};

const StackLayout = ({ children, nPadding = false, direction = 'column' }: StackLayoutProps) => {
  const sx = {
    paddingX: { xs: 1, md: 2 },
    paddingY: { xs: 1, md: 2 },
  };

  return (
    <Stack sx={!nPadding ? sx : undefined} spacing={1} direction={direction}>
      {children}
    </Stack>
  );
};

export default memo(StackLayout);
