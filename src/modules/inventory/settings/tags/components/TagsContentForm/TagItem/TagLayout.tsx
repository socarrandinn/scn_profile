import { ChildrenProps } from '@dfl/mui-react-common';
import { Grid, Typography } from '@mui/material';
import { memo } from 'react';

type TagLayoutProps = ChildrenProps & {
  title: string;
  pt?: number;
};

const TagLayout = ({ title, children, pt }: TagLayoutProps) => {
  return (
    <Grid container spacing={{ xs: 1, md: 2 }}>
      <Grid item xs={4}>
        <Typography fontWeight={500}>{title}</Typography>
      </Grid>
      <Grid item xs={8} sx={{ display: 'flex', justifyContent: 'end' }}>
        {children}
      </Grid>
    </Grid>
  );
};

export default memo(TagLayout);
