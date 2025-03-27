import { ChildrenProps } from '@dfl/mui-react-common';
import { Stack, Skeleton } from '@mui/material';
import { ReactNode } from 'react';

type Props = ChildrenProps & {
  icon?: ReactNode;
  isLoading?: boolean;
};
export const DetailItem = ({ icon, children, isLoading }: Props) => {
  const sx = {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 1,
  };
  if (isLoading) {
    return (
      <Stack sx={sx}>
        <Skeleton variant='circular' sx={{ width: 24, height: 24 }} />
        <Skeleton variant='text' sx={{ width: 240 }} />
      </Stack>
    );
  }

  return (
    <Stack sx={sx}>
      {icon}
      {children}
    </Stack>
  );
};
