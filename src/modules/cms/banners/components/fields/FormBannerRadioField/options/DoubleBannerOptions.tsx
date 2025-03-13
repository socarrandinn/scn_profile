import { Grid, Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';
import { useCollectionBannerContext } from 'modules/cms/banners/context/useCollectionBannerContext';
import RadioButtonCardItem from '../RadioButtonCardItem';
import { IBanner } from 'modules/cms/banners/interfaces';
import useCollectionPositionContext from 'modules/cms/banners/context/useCollectionPositionContext';
import { COLLECTION_BANNER_TYPE } from 'modules/cms/collections/constants/collection-types';

const iconSize = '48px';
type Props = {
  collection1: Pick<IBanner, '_id' | 'position' | 'items'>;
  collection2: Pick<IBanner, '_id' | 'position' | 'items'>;
};
const DoubleBannerOptions = ({ collection1, collection2 }: Props) => {
  const { t } = useTranslation('banner');
  const view = useCollectionBannerContext((state) => state.view);
  const { collection, onCheckPosition } = useCollectionPositionContext();

  /* mobile hero */
  const mobile = useMemo(
    () => (
      <Grid container spacing={1} sx={{ maxWidth: 390 }}>
        <Grid item xs={12}>
          <RadioButtonCardItem
            option={{
              label: t('dropZone.view'),
              imageSize: '(390 x 144)',
              sx: { height: 144, width: '100%' },
              value: collection1?.position as string,
              iconSize,
              banner: collection1?.items?.[0],
            }}
            view={view}
            check={collection?.position}
            onCheck={() => {
              onCheckPosition({ ...collection1, bannerType: COLLECTION_BANNER_TYPE.SIDE_BY_SIDE_BANNER });
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <RadioButtonCardItem
            option={{
              label: t('dropZone.view'),
              imageSize: '(390 x 144)',
              sx: { height: 144, width: '100%' },
              value: collection2?.position as string,
              banner: collection2?.items?.[0],
              iconSize,
            }}
            view={view}
            check={collection?.position}
            onCheck={() => {
              onCheckPosition({ ...collection2, bannerType: COLLECTION_BANNER_TYPE.SIDE_BY_SIDE_BANNER });
            }}
          />
        </Grid>
      </Grid>
    ),
    [t, collection1, view, collection?.position, collection2, onCheckPosition],
  );

  /* desktops hero */
  const desktop = useMemo(
    () => (
      <Grid container spacing={1} sx={{ maxWidth: 1445 }}>
        <Grid item xs={6}>
          <RadioButtonCardItem
            option={{
              label: t('dropZone.view'),
              imageSize: '(708 x 262)',
              sx: { height: 262, width: '100%' },
              value: collection1?.position as string,
              banner: collection1?.items?.[0],
              iconSize,
            }}
            view={view}
            check={collection?.position}
            onCheck={() => {
              onCheckPosition({ ...collection1, bannerType: COLLECTION_BANNER_TYPE.SIDE_BY_SIDE_BANNER });
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <RadioButtonCardItem
            option={{
              label: t('dropZone.view'),
              imageSize: '(708 x 262)',
              sx: { height: 262, width: '100%' },
              value: collection2?.position as string,
              banner: collection2?.items?.[0],
              iconSize,
            }}
            view={view}
            check={collection?.position}
            onCheck={() => {
              onCheckPosition({ ...collection2, bannerType: COLLECTION_BANNER_TYPE.SIDE_BY_SIDE_BANNER });
            }}
          />
        </Grid>
      </Grid>
    ),
    [t, collection1, view, collection?.position, collection2, onCheckPosition],
  );

  return (
    <Stack sx={{ justifyContent: 'center', alignItems: 'center' }}>
      {view === 'desktop' && desktop}
      {view === 'mobile' && mobile}
    </Stack>
  );
};

export default DoubleBannerOptions;
