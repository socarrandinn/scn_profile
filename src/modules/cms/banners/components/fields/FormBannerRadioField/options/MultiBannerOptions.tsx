import { Box, Grid, Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';
import { useBannerContext } from 'modules/cms/banners/context/useBannerContext';
import RadioButtonCardItem from '../RadioButtonCardItem';

const gap = 1;
const iconSize = '40px';
const textSizeMobile = {
  '& .MuiTypography-root': { fontSize: '10px !important' },
};

type Props = {
  filed: any;
};
const MultiBannerOptions = ({ filed }: Props) => {
  const { t } = useTranslation('banner');
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
            <RadioButtonCardItem
              field={filed}
              option={{
                label: t('dropZone.title'),
                imageSize: '(324 x 138)',
                sx: { height: 219, width: '100%' },
                value: 'banner_1',
                iconSize,
              }}
              view={view}
            />
          </Grid>
          <Grid item xs={6} gap={gap} display='flex' flexDirection='column' alignItems='start'>
            <RadioButtonCardItem
              field={filed}
              view={view}
              option={{
                label: t('dropZone.title'),
                imageSize: '(324 x 138)',
                value: 'banner_2',
                iconSize,
                sx: { height: 103, width: '100%', ...textSizeMobile },
              }}
            />
            <RadioButtonCardItem
              field={filed}
              view={view}
              option={{
                label: t('dropZone.title'),
                imageSize: '(324 x 138)',
                value: 'banner_3',
                iconSize,
                sx: { height: 125, width: '100%', ...textSizeMobile },
              }}
            />
          </Grid>
          <Grid item xs={6} gap={gap} display='flex' flexDirection='column' alignItems='start'>
            <RadioButtonCardItem
              field={filed}
              view={view}
              option={{
                label: t('dropZone.title'),
                imageSize: '(324 x 138)',
                value: 'banner_4',
                iconSize,
                sx: { height: 242, width: '100%', ...textSizeMobile },
              }}
            />
          </Grid>
          <Grid item xs={6} gap={gap} display='flex' flexDirection='column' alignItems='start'>
            <RadioButtonCardItem
              field={filed}
              view={view}
              option={{
                label: t('dropZone.title'),
                imageSize: '(324 x 138)',
                value: 'banner_5',
                iconSize,
                sx: { height: 242, width: '100%', ...textSizeMobile },
              }}
            />
          </Grid>
          <Grid item xs={6} gap={gap} display='flex' flexDirection='column' alignItems='start'>
            <RadioButtonCardItem
              field={filed}
              view={view}
              option={{
                label: t('dropZone.title'),
                imageSize: '(324 x 138)',
                value: 'banner_6',
                iconSize,
                sx: { height: 103, width: '100%', ...textSizeMobile },
              }}
            />
            <RadioButtonCardItem
              field={filed}
              view={view}
              option={{
                label: t('dropZone.title'),
                imageSize: '(324 x 138)',
                value: 'banner_7',
                iconSize,
                sx: { height: 125, width: '100%', ...textSizeMobile },
              }}
            />
          </Grid>
        </Grid>
      </Box>
    ),
    [filed, t, view],
  );

  /* desktops hero */
  const desktop = useMemo(
    () => (
      <Grid container spacing={1} sx={{ justifyContent: 'center', alignItems: 'center' }}>
        <Grid item xs={12} lg={3} gap={gap} display='flex' flexDirection='column' alignItems='start'>
          <RadioButtonCardItem
            field={filed}
            view={view}
            option={{
              label: t('dropZone.title'),
              imageSize: '(324 x 138)',
              value: 'banner_1',
              iconSize,
              sx: { height: 138, width: '100%' },
            }}
          />
          <RadioButtonCardItem
            field={filed}
            view={view}
            option={{
              label: t('dropZone.title'),
              imageSize: '(324 x 324)',
              value: 'banner_2',
              iconSize,
              sx: { height: 324, width: '100%' },
            }}
          />
        </Grid>
        <Grid item xs={12} lg={6} gap={gap} display='flex' flexDirection='column' alignItems='start'>
          <RadioButtonCardItem
            field={filed}
            view={view}
            option={{
              label: t('dropZone.title'),
              imageSize: '(648 x 290)',
              value: 'banner_3',
              iconSize,
              sx: { height: 290, width: '100%' },
            }}
          />
          <Stack gap={gap} flexDirection={{ xs: 'column', md: 'row' }} width={'100%'}>
            <RadioButtonCardItem
              field={filed}
              view={view}
              option={{
                label: t('dropZone.title'),
                imageSize: '(324 x 167)',
                value: 'banner_4',
                iconSize,
                sx: { height: 167, width: '100%' },
              }}
            />
            <RadioButtonCardItem
              field={filed}
              view={view}
              option={{
                label: t('dropZone.title'),
                imageSize: '(324 x 167)',
                value: 'banner_5',
                iconSize,
                sx: { height: 167, width: '100%' },
              }}
            />
          </Stack>
        </Grid>
        <Grid item xs={12} lg={3} gap={gap} display='flex' flexDirection='column' alignItems='start'>
          <RadioButtonCardItem
            field={filed}
            view={view}
            option={{
              label: t('dropZone.title'),
              imageSize: '(324 x 324)',
              value: 'banner_6',
              iconSize,
              sx: { height: 324, width: '100%' },
            }}
          />
          <RadioButtonCardItem
            field={filed}
            view={view}
            option={{
              label: t('dropZone.title'),
              imageSize: '(324 x 138)',
              value: 'banner_7',
              iconSize,
              sx: { height: 138, width: '100%' },
            }}
          />
        </Grid>
      </Grid>
    ),
    [filed, t, view],
  );

  return (
    <Box>
      {view === 'desktop' && desktop}
      {view === 'mobile' && mobile}
    </Box>
  );
};

export default MultiBannerOptions;
