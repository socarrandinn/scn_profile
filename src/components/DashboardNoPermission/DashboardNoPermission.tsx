import { memo, useMemo } from 'react';
import { Grid, Skeleton } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Description, Title } from './styled';

type Props = {
  title?: string;
  description?: string;
};

const height = 150;

const DashboardNoPermissionContainer = ({ title, description }: Props) => {
  const { t } = useTranslation('common');

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Skeleton variant={'rectangular'} height={height} />
        </Grid>
        <Grid item xs={4}>
          <Skeleton variant={'rectangular'} height={height} />
        </Grid>
        <Grid item xs={4}>
          <Skeleton variant={'rectangular'} height={height} />
        </Grid>
      </Grid>
      <Grid container direction='column' justifyContent='center' alignItems='center'>
        <Title>{t(title || 'notAllowed.title')}</Title>
        <Description>{t(description || 'notAllowed.description')}</Description>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Skeleton variant={'rectangular'} height={height} />
        </Grid>
        <Grid item xs={4}>
          <Skeleton variant={'rectangular'} height={height} />
        </Grid>
        <Grid item xs={4}>
          <Skeleton variant={'rectangular'} height={height} />
        </Grid>
      </Grid>
    </div>
  );
};

export default memo(DashboardNoPermissionContainer);
