import { Box, Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';
import { useCollectionBannerContext } from 'modules/cms/banners/context/useCollectionBannerContext';
import RadioButtonCardItem from '../RadioButtonCardItem';
import { IBanner } from 'modules/cms/banners/interfaces';
import { useFindCollectionElements } from 'modules/cms/collections/hooks/useFindCollectionElements';
import { COLLECTION_CONTENT_TYPE } from 'modules/cms/collections/constants/collection-types';
import useCollectionPositionContext from 'modules/cms/banners/context/useCollectionPositionContext';

const iconSize = '48px';
type Props = {
  collection1: Pick<IBanner, '_id' | 'position'>;
  collection2: Pick<IBanner, '_id' | 'position'>;
};
const DoubleBannerOptions = ({ collection1, collection2 }: Props) => {
  const { t } = useTranslation('banner');
  const view = useCollectionBannerContext((state) => state.view);
  const { collection, onCheckPosition } = useCollectionPositionContext();

  const { data: banner1 } = useFindCollectionElements(collection1?._id as string, COLLECTION_CONTENT_TYPE.BANNER);
  const { data: banner2 } = useFindCollectionElements(collection2?._id as string, COLLECTION_CONTENT_TYPE.BANNER);

  /* mobile hero */
  const mobile = useMemo(
    () => (
      <Stack sx={{ width: '100%', mx: 'auto', gap: 2 }}>
        <RadioButtonCardItem
          option={{
            label: t('dropZone.view'),
            imageSize: '(390 x 390)',
            sx: { height: 250, width: 390, mx: 'auto' },
            value: collection1?.position as string,
            iconSize,
            banner: banner1?.data?.[0],
          }}
          view={view}
          check={collection?.position}
          onCheck={() => {
            onCheckPosition(collection1);
          }}
        />
        <RadioButtonCardItem
          option={{
            label: t('dropZone.view'),
            imageSize: '(390 x 390)',
            sx: { height: 250, width: 390, mx: 'auto' },
            value: collection2?.position as string,
            banner: banner2?.data?.[0],
            iconSize,
          }}
          view={view}
          check={collection?.position}
          onCheck={() => {
            onCheckPosition(collection2);
          }}
        />
      </Stack>
    ),
    [t, collection1, banner1?.data, view, collection?.position, collection2, banner2?.data, onCheckPosition],
  );

  /* desktops hero */
  const desktop = useMemo(
    () => (
      <Stack sx={{ width: '100%', gap: 2, flexDirection: 'row' }}>
        <RadioButtonCardItem
          option={{
            label: t('dropZone.view'),
            imageSize: '(347 x 191)',
            sx: { height: 191, width: '50%' },
            value: collection1?.position as string,
            banner: banner1?.data?.[0],
            iconSize,
          }}
          view={view}
          check={collection?.position}
          onCheck={() => {
            onCheckPosition(collection1);
          }}
        />
        <RadioButtonCardItem
          option={{
            label: t('dropZone.view'),
            imageSize: '(347 x 191)',
            sx: { height: 191, width: '50%' },
            value: collection2?.position as string,
            banner: banner2?.data?.[0],
            iconSize,
          }}
          view={view}
          check={collection?.position}
          onCheck={() => {
            onCheckPosition(collection2);
          }}
        />
      </Stack>
    ),
    [t, collection1, banner1?.data, view, collection?.position, collection2, banner2?.data, onCheckPosition],
  );

  return (
    <Box>
      {view === 'desktop' && desktop}
      {view === 'mobile' && mobile}
    </Box>
  );
};

export default DoubleBannerOptions;
