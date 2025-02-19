import { Box, Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';
import { useCollectionBannerContext } from 'modules/cms/banners/context/useCollectionBannerContext';
import RadioButtonCardItem from '../RadioButtonCardItem';
import { IBanner } from 'modules/cms/banners/interfaces';

const iconSize = '48px';
type Props = {
  banner1: IBanner;
  banner2: IBanner;
};
const DoubleBannerOptions = ({ banner1, banner2 }: Props) => {
  const { t } = useTranslation('banner');
  const view = useCollectionBannerContext((state) => state.view);

  /* mobile hero */
  const mobile = useMemo(
    () => (
      <Stack sx={{ width: '100%', mx: 'auto', gap: 2 }}>
        <RadioButtonCardItem
          // field={filed}
          option={{
            label: t('dropZone.view'),
            imageSize: '(390 x 390)',
            sx: { height: 250, width: 390, mx: 'auto' },
            value: 'double_banner_1',
            iconSize,
            banner: banner1,
          }}
          view={view}
        />
        <RadioButtonCardItem
          // field={filed}
          option={{
            label: t('dropZone.view'),
            imageSize: '(390 x 390)',
            sx: { height: 250, width: 390, mx: 'auto' },
            value: 'double_banner_2',
            iconSize,
            banner: banner2,
          }}
          view={view}
        />
      </Stack>
    ),
    [banner1, banner2, t, view],
  );

  /* desktops hero */
  const desktop = useMemo(
    () => (
      <Stack sx={{ width: '100%', gap: 2, flexDirection: 'row' }}>
        <RadioButtonCardItem
          // field={filed}
          option={{
            label: t('dropZone.view'),
            imageSize: '(347 x 191)',
            sx: { height: 191, width: '50%' },
            value: 'double_banner_1',
            iconSize,
            banner: banner1,
          }}
          view={view}
        />
        <RadioButtonCardItem
          // field={filed}
          option={{
            label: t('dropZone.view'),
            imageSize: '(347 x 191)',
            sx: { height: 191, width: '50%' },
            value: 'double_banner_2',
            iconSize,
            banner: banner2,
          }}
          view={view}
        />
      </Stack>
    ),
    [banner1, banner2, t, view],
  );

  return (
    <Box>
      {view === 'desktop' && desktop}
      {view === 'mobile' && mobile}
    </Box>
  );
};

export default DoubleBannerOptions;
