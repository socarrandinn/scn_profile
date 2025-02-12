import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';
import { useCollectionBannerContext } from 'modules/cms/banners/context/useCollectionBannerContext';
import RadioButtonCardItem from '../RadioButtonCardItem';

const iconSize = '48px';
type Props = {
  filed: any;
  bannerId?: string;
};
const SimpleBannerOptions = ({ filed, bannerId }: Props) => {
  const { t } = useTranslation('banner');
  const view = useCollectionBannerContext((state) => state.view);

  /* mobile hero */
  const mobile = useMemo(
    () => (
      <Box sx={{ width: '100%', mx: 'auto' }}>
        <RadioButtonCardItem
          field={filed}
          option={{
            label: t('dropZone.title'),
            imageSize: '(390 x 390)',
            sx: { height: 390, width: 390, mx: 'auto' },
            value: bannerId ?? 'simple_banner_1',
            iconSize,
          }}
          view={view}
        />
      </Box>
    ),
    [bannerId, filed, t, view],
  );

  /* desktops hero */
  const desktop = useMemo(
    () => (
      <Box sx={{ width: '100%' }}>
        <RadioButtonCardItem
          field={filed}
          option={{
            label: t('dropZone.title'),
            imageSize: '(347 x 191)',
            sx: { height: 191, width: '100%' },
            value: bannerId ?? 'simple_banner_1',
            iconSize,
          }}
          view={view}
        />
      </Box>
    ),
    [bannerId, filed, t, view],
  );

  return (
    <Box>
      {view === 'desktop' && desktop}
      {view === 'mobile' && mobile}
    </Box>
  );
};

export default SimpleBannerOptions;
