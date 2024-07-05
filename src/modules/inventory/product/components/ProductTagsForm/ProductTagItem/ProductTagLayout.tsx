import { ChildrenProps } from '@dfl/mui-react-common';
import { Divider, Stack, Typography } from '@mui/material';
import { memo } from 'react';

type ProductTagLayoutProps = ChildrenProps & {
  title: string;
  pt?: number;
};

const ProductTagLayout = ({ title, children, pt }: ProductTagLayoutProps) => {
  return (
    <Stack gap={2} alignItems={'start'} pt={pt}>
      <Stack width={'100%'} gap={0.5}>
        <Typography fontWeight={500}>{title}</Typography>
        <Divider flexItem />
      </Stack>
      {children}
    </Stack>
  );
};

export default memo(ProductTagLayout);
