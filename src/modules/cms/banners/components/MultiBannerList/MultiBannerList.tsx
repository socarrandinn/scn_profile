import { Box, Grid, Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useBannerContext } from '../../context/useBannerContext';
import { useMemo } from 'react';
import CollectionMediaModal from '../../containers/CollectionMediaModal';
import { useToggle } from '@dfl/hook-utils';
import MultiBannerItem from './MultiBannerItem';

const gap = 1;
const iconSize = '32px';
const textSizeMobile = {
  '& .MuiTypography-root': { fontSize: '10px !important' },
};

const MultiBannerList = () => {
  const { t } = useTranslation('banner');
  const { isOpen, onOpen, onClose } = useToggle(false);

  const view = useBannerContext((state) => state.view);

  /* mobile hero */
  const mobile = useMemo(
    () => (
      <Box sx={{ width: '100%' }}>
        <Grid
          container
          spacing={1}
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
            maxWidth: {
              xs: '100%',
              sm: 390,
            },
            mx: 'auto',
          }}
        >
          <Grid item xs={12} gap={gap} display='flex' flexDirection='column' alignItems='start'>
            <MultiBannerItem
              onOpen={onOpen}
              iconSize={iconSize}
              title={t('dropZone.title')}
              imageSize='(324 x 138)'
              sx={{
                height: 219,
                width: '100%',
                ...textSizeMobile,
              }}
            />
          </Grid>
          <Grid item xs={6} gap={gap} display='flex' flexDirection='column' alignItems='start'>
            <MultiBannerItem
              onOpen={onOpen}
              iconSize={iconSize}
              title={t('dropZone.title')}
              imageSize='(324 x 138)'
              sx={{ height: 103, width: '100%', ...textSizeMobile }}
            />
            <MultiBannerItem
              onOpen={onOpen}
              iconSize={iconSize}
              title={t('dropZone.title')}
              imageSize='(324 x 138)'
              sx={{ height: 125, width: '100%', ...textSizeMobile }}
            />
          </Grid>
          <Grid item xs={6} gap={gap} display='flex' flexDirection='column' alignItems='start'>
            <MultiBannerItem
              onOpen={onOpen}
              iconSize={iconSize}
              title={t('dropZone.title')}
              imageSize='(324 x 138)'
              sx={{ height: 242, width: '100%', ...textSizeMobile }}
            />
          </Grid>
          <Grid item xs={6} gap={gap} display='flex' flexDirection='column' alignItems='start'>
            <MultiBannerItem
              onOpen={onOpen}
              iconSize={iconSize}
              title={t('dropZone.title')}
              imageSize='(324 x 138)'
              sx={{ height: 242, width: '100%', ...textSizeMobile }}
            />
          </Grid>
          <Grid item xs={6} gap={gap} display='flex' flexDirection='column' alignItems='start'>
            <MultiBannerItem
              onOpen={onOpen}
              iconSize={iconSize}
              title={t('dropZone.title')}
              imageSize='(324 x 138)'
              sx={{ height: 103, width: '100%', ...textSizeMobile }}
            />
            <MultiBannerItem
              onOpen={onOpen}
              iconSize={iconSize}
              title={t('dropZone.title')}
              imageSize='(324 x 138)'
              sx={{ height: 125, width: '100%', ...textSizeMobile }}
            />
          </Grid>
        </Grid>
      </Box>
    ),
    [onOpen, t],
  );

  /* desktops hero */
  const desktop = useMemo(
    () => (
      <Grid container spacing={1} sx={{ justifyContent: 'center', alignItems: 'center' }}>
        <Grid item xs={12} lg={3} gap={gap} display='flex' flexDirection='column' alignItems='start'>
          <MultiBannerItem
            onOpen={onOpen}
            title={t('dropZone.title')}
            imageSize='(324 x 138)'
            sx={{ height: 138, width: '100%' }}
          />
          <MultiBannerItem
            onOpen={onOpen}
            title={t('dropZone.title')}
            imageSize='(324 x 324)'
            sx={{ height: 324, width: '100%' }}
          />
        </Grid>
        <Grid item xs={12} lg={6} gap={gap} display='flex' flexDirection='column' alignItems='start'>
          <MultiBannerItem
            onOpen={onOpen}
            title={t('dropZone.title')}
            imageSize='(648 x 290)'
            sx={{ height: 290, width: '100%' }}
          />
          <Stack gap={gap} flexDirection={{ xs: 'column', md: 'row' }} width={'100%'}>
            <MultiBannerItem
              onOpen={onOpen}
              title={t('dropZone.title')}
              imageSize='(324 x 167)'
              sx={{ height: 167, width: '100%' }}
            />
            <MultiBannerItem
              onOpen={onOpen}
              title={t('dropZone.title')}
              imageSize='(324 x 167)'
              sx={{ height: 167, width: '100%' }}
            />
          </Stack>
        </Grid>
        <Grid item xs={12} lg={3} gap={gap} display='flex' flexDirection='column' alignItems='start'>
          <MultiBannerItem
            onOpen={onOpen}
            title={t('dropZone.title')}
            imageSize='(324 x 324)'
            sx={{ height: 324, width: '100%' }}
          />
          <MultiBannerItem
            onOpen={onOpen}
            title={t('dropZone.title')}
            imageSize='(324 x 138)'
            sx={{ height: 138, width: '100%' }}
          />
        </Grid>
      </Grid>
    ),
    [onOpen, t],
  );

  return (
    <Box>
      {view === 'desktop' && desktop}
      {view === 'module' && mobile}
      <CollectionMediaModal open={isOpen} onClose={onClose} title='modal.title' />
    </Box>
  );
};

export default MultiBannerList;
