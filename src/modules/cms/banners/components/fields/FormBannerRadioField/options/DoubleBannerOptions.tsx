import { Box, Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';
import { useCollectionBannerContext } from 'modules/cms/banners/context/useCollectionBannerContext';
import RadioButtonCardItem from '../RadioButtonCardItem';

const iconSize = '48px';
type Props = {
  filed: any;
};
const DoubleBannerOptions = ({ filed }: Props) => {
  const { t } = useTranslation('banner');
  const view = useCollectionBannerContext((state) => state.view);

  /* mobile hero */
  const mobile = useMemo(
    () => (
      <Stack sx={{ width: '100%', mx: 'auto', gap: 2 }}>
        <RadioButtonCardItem
          // field={filed}
          option={{
            label: t('dropZone.title'),
            imageSize: '(390 x 390)',
            sx: { height: 250, width: 390, mx: 'auto' },
            value: 'double_banner_1',
            iconSize,
          }}
          view={view}
        />
        <RadioButtonCardItem
          // field={filed}
          option={{
            label: t('dropZone.title'),
            imageSize: '(390 x 390)',
            sx: { height: 250, width: 390, mx: 'auto' },
            value: 'double_banner_2',
            iconSize,
          }}
          view={view}
        />
      </Stack>
    ),
    [t, view],
  );

  /* desktops hero */
  const desktop = useMemo(
    () => (
      <Stack sx={{ width: '100%', gap: 2, flexDirection: 'row' }}>
        <RadioButtonCardItem
          // field={filed}
          option={{
            label: t('dropZone.title'),
            imageSize: '(347 x 191)',
            sx: { height: 191, width: '50%' },
            value: 'double_banner_1',
            iconSize,
          }}
          view={view}
        />
        <RadioButtonCardItem
          // field={filed}
          option={{
            label: t('dropZone.title'),
            imageSize: '(347 x 191)',
            sx: { height: 191, width: '50%' },
            value: 'double_banner_2',
            iconSize,
          }}
          view={view}
        />
      </Stack>
    ),
    [t, view],
  );

  return (
    <Box>
      {view === 'desktop' && desktop}
      {view === 'mobile' && mobile}
    </Box>
  );
};

export default DoubleBannerOptions;
