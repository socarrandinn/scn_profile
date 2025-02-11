import { Button, Chip } from '@mui/material';
import { memo, useMemo } from 'react';
import useSelectBannerContext from '../../context/useSelectBannerContext';
import { useTranslation } from 'react-i18next';

const BannerCleanSelection = () => {
  const { t } = useTranslation('banner');
  const { clearSelection, elements } = useSelectBannerContext();
  const isDisabled = useMemo(() => !elements.length, [elements.length]);
  return (
    <Button
      variant='outlined'
      onClick={clearSelection}
      disabled={isDisabled}
      sx={{ width: 'auto', display: 'inline-block', flex: '0 0 auto', gap: 1 }}
    >
      {t('cleanSelection')}
      <Chip label={elements.length} color={isDisabled ? 'default' : 'primary'} sx={{ ml: 1 }} />
    </Button>
  );
};

export default memo(BannerCleanSelection);
