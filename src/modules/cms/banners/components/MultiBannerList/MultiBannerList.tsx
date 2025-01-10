import { Grid, Stack } from '@mui/material';
import MultiBannerItem from './MultiBannerItem';
import { useTranslation } from 'react-i18next';

const gap = 2;

const MultiBannerList = () => {
  const { t } = useTranslation('collection');
  return (
    <Grid container spacing={2} sx={{ justifyContent: 'center', alignItems: 'center' }}>
      <Grid item xs={12} lg={3} gap={gap} display='flex' flexDirection='column' alignItems='start'>
        <MultiBannerItem title={t('banner.title')} imageSize='(324 x 138)' sx={{ height: 138, width: '100%' }} />
        <MultiBannerItem title={t('banner.title')} imageSize='(324 x 324)' sx={{ height: 324, width: '100%' }} />
      </Grid>
      <Grid item xs={12} lg={6} gap={gap} display='flex' flexDirection='column' alignItems='start'>
        <MultiBannerItem title={t('banner.title')} imageSize='(648 x 290)' sx={{ height: 290, width: '100%' }} />
        <Stack gap={gap} flexDirection={{ xs: 'column', md: 'row' }} width={'100%'}>
          <MultiBannerItem title={t('banner.title')} imageSize='(324 x 167)' sx={{ height: 167, width: '100%' }} />
          <MultiBannerItem title={t('banner.title')} imageSize='(324 x 167)' sx={{ height: 167, width: '100%' }} />
        </Stack>
      </Grid>
      <Grid item xs={12} lg={3} gap={gap} display='flex' flexDirection='column' alignItems='start'>
        <MultiBannerItem title={t('banner.title')} imageSize='(324 x 324)' sx={{ height: 324, width: '100%' }} />
        <MultiBannerItem title={t('banner.title')} imageSize='(324 x 138)' sx={{ height: 138, width: '100%' }} />
      </Grid>
    </Grid>
  );
};

export default MultiBannerList;
