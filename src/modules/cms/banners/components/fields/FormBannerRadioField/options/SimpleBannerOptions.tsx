import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';
import { useCollectionBannerContext } from 'modules/cms/banners/context/useCollectionBannerContext';
import RadioButtonCardItem from '../RadioButtonCardItem';
import { IBanner } from 'modules/cms/banners/interfaces';

const iconSize = '48px';
type Props = {
  banner?: IBanner;
  bannerId?: string;
};
const SimpleBannerOptions = ({ banner, bannerId = 'simple-banner' }: Props) => {
  const { t } = useTranslation('banner');
  const view = useCollectionBannerContext((state) => state.view);

  /* mobile hero */
  const mobile = useMemo(
    () => (
      <Box sx={{ width: '100%', mx: 'auto' }}>
        <RadioButtonCardItem
          // field={banner}
          option={{
            label: t('dropZone.view'),
            imageSize: '(390 x 390)',
            sx: { height: 390, width: 390, mx: 'auto' },
            value: bannerId ?? 'simple_banner_1',
            iconSize,
            banner,
          }}
          view={view}
        />
      </Box>
    ),
    [banner, t, bannerId, view],
  );

  /* desktops hero */
  const desktop = useMemo(
    () => (
      <Box sx={{ width: '100%' }}>
        <RadioButtonCardItem
          // field={banner}
          option={{
            label: t('dropZone.view'),
            imageSize: '(347 x 191)',
            sx: { height: 219, width: '100%' },
            value: bannerId ?? 'simple_banner_1',
            iconSize,
            banner,
          }}
          view={view}
        />
      </Box>
    ),
    [banner, bannerId, t, view],
  );

  return (
    <Box>
      {view === 'desktop' && desktop}
      {view === 'mobile' && mobile}
    </Box>
  );
};

export default SimpleBannerOptions;
