import { memo, useMemo } from 'react';
import { Grid, Skeleton } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Description, Title } from './styled';

const DashboardNoPermissionContainer = () => {
  const height = useMemo(() => 150, []);
  const { t } = useTranslation();

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
        <Title>{t('notAllowed.title')}</Title>
        <Description>{t('notAllowed.description')}</Description>
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
