import { Box, Grid, Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';
import { useCollectionBannerContext } from 'modules/cms/banners/context/useCollectionBannerContext';
import RadioButtonCardItem from '../RadioButtonCardItem';
import { IBanner } from 'modules/cms/banners/interfaces';
import useCollectionPositionContext from 'modules/cms/banners/context/useCollectionPositionContext';
import { COLLECTION_CONTENT_TYPE } from 'modules/cms/collections/constants/collection-types';
import { useFindCollectionElements } from 'modules/cms/collections/hooks/useFindCollectionElements';

const gap = 1;
const iconSize = '40px';
const textSizeMobile = {
  '& .MuiTypography-root': { fontSize: '10px !important' },
};

type Props = {
  collections: Array<Pick<IBanner, '_id' | 'position'>>;
};
const MultiBannerOptions = ({ collections }: Props) => {
  const { t } = useTranslation('banner');
  const view = useCollectionBannerContext((state) => state.view);
  const { collection, onCheckPosition } = useCollectionPositionContext();

  const { data: banner1 } = useFindCollectionElements(collections?.[0]?._id as string, COLLECTION_CONTENT_TYPE.BANNER);
  const { data: banner2 } = useFindCollectionElements(collections?.[1]?._id as string, COLLECTION_CONTENT_TYPE.BANNER);
  const { data: banner3 } = useFindCollectionElements(collections?.[2]?._id as string, COLLECTION_CONTENT_TYPE.BANNER);
  const { data: banner4 } = useFindCollectionElements(collections?.[3]?._id as string, COLLECTION_CONTENT_TYPE.BANNER);
  const { data: banner5 } = useFindCollectionElements(collections?.[4]?._id as string, COLLECTION_CONTENT_TYPE.BANNER);
  const { data: banner6 } = useFindCollectionElements(collections?.[5]?._id as string, COLLECTION_CONTENT_TYPE.BANNER);
  const { data: banner7 } = useFindCollectionElements(collections?.[6]?._id as string, COLLECTION_CONTENT_TYPE.BANNER);

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
              option={{
                label: t('dropZone.title'),
                imageSize: '(324 x 138)',
                sx: { height: 219, width: '100%' },
                value: collections?.[0]?.position as string,
                iconSize,
                banner: banner1?.data?.[0],
              }}
              view={view}
              check={collection?.position}
              onCheck={() => {
                onCheckPosition(collections?.[0]);
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
                imageSize: '(324 x 138)',
                value: collections?.[1]?.position as string,
                iconSize,
                sx: { height: 103, width: '100%', ...textSizeMobile },
                banner: banner2?.data?.[0],
              }}
            />
            <RadioButtonCardItem
              check={collection?.position}
              onCheck={() => {
                onCheckPosition(collections?.[2]);
              }}
              view={view}
              option={{
                label: t('dropZone.title'),
                imageSize: '(324 x 138)',
                value: collections?.[2]?.position as string,
                iconSize,
                sx: { height: 125, width: '100%', ...textSizeMobile },
                banner: banner3?.data?.[0],
              }}
            />
          </Grid>
          <Grid item xs={6} gap={gap} display='flex' flexDirection='column' alignItems='start'>
            <RadioButtonCardItem
              check={collection?.position}
              onCheck={() => {
                onCheckPosition(collections?.[3]);
              }}
              view={view}
              option={{
                label: t('dropZone.title'),
                imageSize: '(324 x 138)',
                value: collections?.[3]?.position as string,
                iconSize,
                sx: { height: 242, width: '100%', ...textSizeMobile },
                banner: banner4?.data?.[0],
              }}
            />
          </Grid>
          <Grid item xs={6} gap={gap} display='flex' flexDirection='column' alignItems='start'>
            <RadioButtonCardItem
              check={collection?.position}
              onCheck={() => {
                onCheckPosition(collections?.[4]);
              }}
              view={view}
              option={{
                label: t('dropZone.title'),
                imageSize: '(324 x 138)',
                value: collections?.[4]?.position as string,
                iconSize,
                sx: { height: 242, width: '100%', ...textSizeMobile },
                banner: banner5?.data?.[0],
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
                imageSize: '(324 x 138)',
                value: collections?.[5]?.position as string,
                iconSize,
                sx: { height: 103, width: '100%', ...textSizeMobile },
                banner: banner6?.data?.[0],
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
                imageSize: '(324 x 138)',
                value: collections?.[6]?.position as string,
                iconSize,
                sx: { height: 125, width: '100%', ...textSizeMobile },
                banner: banner7?.data?.[0],
              }}
            />
          </Grid>
        </Grid>
      </Box>
    ),
    [
      banner1?.data,
      banner2?.data,
      banner3?.data,
      banner4?.data,
      banner5?.data,
      banner6?.data,
      banner7?.data,
      collection?.position,
      collections,
      onCheckPosition,
      t,
      view,
    ],
  );

  /* desktops hero */
  const desktop = useMemo(
    () => (
      <Grid container spacing={1} sx={{ justifyContent: 'center', alignItems: 'center' }}>
        <Grid item xs={12} lg={3} gap={gap} display='flex' flexDirection='column' alignItems='start'>
          <RadioButtonCardItem
            check={collection?.position}
            onCheck={() => {
              onCheckPosition(collections?.[0]);
            }}
            view={view}
            option={{
              label: t('dropZone.title'),
              imageSize: '(324 x 138)',
              value: collections?.[0]?.position as string,
              iconSize,
              sx: { height: 138, width: '100%' },
              banner: banner1?.data?.[0],
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
              imageSize: '(324 x 324)',
              value: collections?.[1]?.position as string,
              iconSize,
              sx: { height: 324, width: '100%' },
              banner: banner2?.data?.[0],
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
              imageSize: '(648 x 290)',
              value: collections?.[2]?.position as string,
              iconSize,
              sx: { height: 290, width: '100%' },
              banner: banner3?.data?.[0],
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
                imageSize: '(324 x 167)',
                value: collections?.[3]?.position as string,
                iconSize,
                sx: { height: 167, width: '100%' },
                banner: banner4?.data?.[0],
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
                imageSize: '(324 x 167)',
                value: collections?.[4]?.position as string,
                iconSize,
                sx: { height: 167, width: '100%' },
                banner: banner5?.data?.[0],
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
              imageSize: '(324 x 324)',
              value: collections?.[5]?.position as string,
              iconSize,
              sx: { height: 324, width: '100%' },
              banner: banner6?.data?.[0],
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
              imageSize: '(324 x 138)',
              value: collections?.[6]?.position as string,
              iconSize,
              sx: { height: 138, width: '100%' },
              banner: banner7?.data?.[0],
            }}
          />
        </Grid>
      </Grid>
    ),
    [
      banner1?.data,
      banner2?.data,
      banner3?.data,
      banner4?.data,
      banner5?.data,
      banner6?.data,
      banner7?.data,
      collection?.position,
      collections,
      onCheckPosition,
      t,
      view,
    ],
  );

  return (
    <Box>
      {view === 'desktop' && desktop}
      {view === 'mobile' && mobile}
    </Box>
  );
};

export default MultiBannerOptions;
