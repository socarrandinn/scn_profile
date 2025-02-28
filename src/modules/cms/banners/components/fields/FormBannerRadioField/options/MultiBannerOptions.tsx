import { Box, Grid, Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';
import { useCollectionBannerContext } from 'modules/cms/banners/context/useCollectionBannerContext';
import RadioButtonCardItem from '../RadioButtonCardItem';
import { IBanner } from 'modules/cms/banners/interfaces';
import useCollectionPositionContext from 'modules/cms/banners/context/useCollectionPositionContext';

const gap = 1;
const iconSize = '40px';
const textSizeMobile = {
  '& .MuiTypography-root': { fontSize: '10px !important' },
};

type Props = {
  collections: Array<Pick<IBanner, '_id' | 'position' | 'items'>>;
};
const MultiBannerOptions = ({ collections }: Props) => {
  const { t } = useTranslation('banner');
  const view = useCollectionBannerContext((state) => state.view);
  const { collection, onCheckPosition } = useCollectionPositionContext();

  /* mobile hero */
  const mobile = useMemo(
    () => (
      <Box sx={{ width: '100%' }}>
        <Grid
          container
          spacing={1}
          sx={{
            maxWidth: {
              xs: '100%',
              sm: 390,
            },
            mx: 'auto',
          }}
        >
          <Grid item xs={12} gap={gap} display='flex' flexDirection='column' alignItems='start'>
            <RadioButtonCardItem
              option={{
                label: t('dropZone.title'),
                imageSize: '(390 x 219)',
                sx: { height: 219, width: '100%' },
                value: collections?.[2]?.position as string,
                iconSize,
                banner: collections?.[2]?.items?.[0],
              }}
              view={view}
              check={collection?.position}
              onCheck={() => {
                onCheckPosition(collections?.[2]);
              }}
            />
          </Grid>
          <Grid item xs={6} gap={gap} display='flex' flexDirection='column' alignItems='start'>
            <RadioButtonCardItem
              check={collection?.position}
              onCheck={() => {
                onCheckPosition(collections?.[1]);
              }}
              view={view}
              option={{
                label: t('dropZone.title'),
                imageSize: '(188 x 103)',
                value: collections?.[1]?.position as string,
                iconSize,
                sx: { height: 105, width: '100%', ...textSizeMobile },
                banner: collections?.[1]?.items?.[0],
              }}
            />
            <RadioButtonCardItem
              check={collection?.position}
              onCheck={() => {
                onCheckPosition(collections?.[3]);
              }}
              view={view}
              option={{
                label: t('dropZone.title'),
                imageSize: '(188 x 125)',
                value: collections?.[3]?.position as string,
                iconSize,
                sx: { height: 127, width: '100%', ...textSizeMobile },
                banner: collections?.[3]?.items?.[0],
              }}
            />
          </Grid>
          <Grid item xs={6} gap={gap} display='flex' flexDirection='column' alignItems='start'>
            <RadioButtonCardItem
              check={collection?.position}
              onCheck={() => {
                onCheckPosition(collections?.[0]);
              }}
              view={view}
              option={{
                label: t('dropZone.title'),
                imageSize: '(188 x 242)',
                value: collections?.[0]?.position as string,
                iconSize,
                sx: { height: 242, width: '100%', ...textSizeMobile },
                banner: collections?.[0]?.items?.[0],
              }}
            />
          </Grid>
          <Grid item xs={6} gap={gap} display='flex' flexDirection='column' alignItems='start'>
            <RadioButtonCardItem
              check={collection?.position}
              onCheck={() => {
                onCheckPosition(collections?.[6]);
              }}
              view={view}
              option={{
                label: t('dropZone.title'),
                imageSize: '(188 x 242)',
                value: collections?.[6]?.position as string,
                iconSize,
                sx: { height: 242, width: '100%', ...textSizeMobile },
                banner: collections?.[6]?.items?.[0],
              }}
            />
          </Grid>
          <Grid item xs={6} gap={gap} display='flex' flexDirection='column' alignItems='start'>
            <RadioButtonCardItem
              check={collection?.position}
              onCheck={() => {
                onCheckPosition(collections?.[5]);
              }}
              view={view}
              option={{
                label: t('dropZone.title'),
                imageSize: '(188 x 105)',
                value: collections?.[5]?.position as string,
                iconSize,
                sx: { height: 105, width: '100%', ...textSizeMobile },
                banner: collections?.[5]?.items?.[0],
              }}
            />
            <RadioButtonCardItem
              check={collection?.position}
              onCheck={() => {
                onCheckPosition(collections?.[4]);
              }}
              view={view}
              option={{
                label: t('dropZone.title'),
                imageSize: '(188 x 127)',
                value: collections?.[4]?.position as string,
                iconSize,
                sx: { height: 127, width: '100%', ...textSizeMobile },
                banner: collections?.[4]?.items?.[0],
              }}
            />
          </Grid>
        </Grid>
      </Box>
    ),
    [collection?.position, collections, onCheckPosition, t, view],
  );

  /* desktops hero */
  const desktop = useMemo(
    () => (
      <Box sx={{ width: '100%' }}>
        <Grid container spacing={1} sx={{ justifyContent: 'center', alignItems: 'center', maxWidth: 1445, mx: 'auto' }}>
          <Grid item xs={12} lg={3} gap={gap} display='flex' flexDirection='column' alignItems='start'>
            <RadioButtonCardItem
              check={collection?.position}
              onCheck={() => {
                onCheckPosition(collections?.[0]);
              }}
              view={view}
              option={{
                label: t('dropZone.title'),
                imageSize: '(347 x 447)',
                value: collections?.[0]?.position as string,
                iconSize,
                sx: {
                  height: {
                    xs: 371,
                    md: 447,
                  },
                  width: { xs: '100%' },
                },
                banner: collections?.[0]?.items?.[0],
              }}
            />
            <RadioButtonCardItem
              check={collection?.position}
              onCheck={() => {
                onCheckPosition(collections?.[1]);
              }}
              view={view}
              option={{
                label: t('dropZone.title'),
                imageSize: '(347 x 191)',
                value: collections?.[1]?.position as string,
                iconSize,
                sx: {
                  height: {
                    xs: 158,
                    md: 191,
                  },
                  width: { xs: '100%' },
                },
                banner: collections?.[1]?.items?.[0],
              }}
            />
          </Grid>
          <Grid item xs={12} lg={6} gap={gap} display='flex' flexDirection='column' alignItems='start'>
            <RadioButtonCardItem
              check={collection?.position}
              onCheck={() => {
                onCheckPosition(collections?.[2]);
              }}
              view={view}
              option={{
                label: t('dropZone.title'),
                imageSize: '(714 x 402)',
                value: collections?.[2]?.position as string,
                iconSize,
                sx: {
                  height: {
                    xs: 333,
                    md: 402,
                  },
                  width: { xs: '100%' },
                },
                banner: collections?.[2]?.items?.[0],
              }}
            />
            <Stack gap={gap} flexDirection={{ xs: 'column', md: 'row' }} width={'100%'}>
              <RadioButtonCardItem
                check={collection?.position}
                onCheck={() => {
                  onCheckPosition(collections?.[3]);
                }}
                view={view}
                option={{
                  label: t('dropZone.title'),
                  imageSize: '(347 x 231)',
                  value: collections?.[3]?.position as string,
                  iconSize,
                  sx: {
                    height: {
                      xs: 191,
                      md: 231,
                    },
                    width: { xs: '100%' },
                  },
                  banner: collections?.[3]?.items?.[0],
                }}
              />
              <RadioButtonCardItem
                check={collection?.position}
                onCheck={() => {
                  onCheckPosition(collections?.[4]);
                }}
                view={view}
                option={{
                  label: t('dropZone.title'),
                  imageSize: '(347 x 231)',
                  value: collections?.[4]?.position as string,
                  iconSize,
                  sx: {
                    height: {
                      xs: 191,
                      md: 231,
                    },
                    width: { xs: '100%' },
                  },
                  banner: collections?.[4]?.items?.[0],
                }}
              />
            </Stack>
          </Grid>
          <Grid item xs={12} lg={3} gap={gap} display='flex' flexDirection='column' alignItems='start'>
            <RadioButtonCardItem
              check={collection?.position}
              onCheck={() => {
                onCheckPosition(collections?.[5]);
              }}
              view={view}
              option={{
                label: t('dropZone.title'),
                imageSize: '(347 x 191)',
                value: collections?.[5]?.position as string,
                iconSize,
                sx: { height: { xs: 158, md: 191 }, width: { xs: '100%' } },
                banner: collections?.[5]?.items?.[0],
              }}
            />
            <RadioButtonCardItem
              check={collection?.position}
              onCheck={() => {
                onCheckPosition(collections?.[6]);
              }}
              view={view}
              option={{
                label: t('dropZone.title'),
                imageSize: '(347 x 447)',
                value: collections?.[6]?.position as string,
                iconSize,
                sx: {
                  height: {
                    xs: 371,
                    md: 447,
                  },
                  width: { xs: '100%' },
                },
                banner: collections?.[6]?.items?.[0],
              }}
            />
          </Grid>
        </Grid>
      </Box>
    ),
    [collection?.position, collections, onCheckPosition, t, view],
  );

  return (
    <Box>
      {view === 'desktop' && desktop}
      {view === 'mobile' && mobile}
    </Box>
  );
};

export default MultiBannerOptions;
