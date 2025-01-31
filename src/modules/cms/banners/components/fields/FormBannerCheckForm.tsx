import { memo, useMemo } from 'react';
import { useBannerContext } from '../../context/useBannerContext';
import { Stack } from '@mui/material';
import BannerToggle from '../BannerToggle/BannerToggle';
import MultiBannerItem from '../MultiBannerList/MultiBannerItem';
import { useTranslation } from 'react-i18next';
import { useToggle } from '@dfl/hook-utils';
import CollectionMediaModal from '../../containers/CollectionMediaModal';
import { BannerFormPaperTitle } from '../BannerFormPaperTitle';

const textSizeMobile = {
  '& .MuiTypography-root': { fontSize: '10px !important' },
};
const iconSize = '32px';

const FormBannerCheckForm = () => {
  const { t } = useTranslation('banner');
  const { isOpen, onOpen, onClose } = useToggle(false);
  const { setView, view } = useBannerContext();
  const media = useBannerContext((state) => state.media);
  const removeMedia = useBannerContext((state) => state.removeMedia);

  const _bannerMobile = useMemo(() => media[view ?? 'mobile'], [media, view]);
  const _bannerDesktop = useMemo(() => media[view ?? 'desktop'], [media, view]);

  const onChange = (e: any) => {
    if (e.target.value !== null) {
      const value = e.target.value;
      setView(value);
    }
  };

  const mobile = useMemo(
    () => (
      <MultiBannerItem
        onOpen={onOpen}
        iconSize={iconSize}
        title={t('dropZone.title')}
        imageSize='(390 x 390)'
        sx={{
          height: 250,
          width: '100%',
          maxWidth: 250,
          ...textSizeMobile,
        }}
        media={_bannerMobile}
        onRemove={removeMedia}
      />
    ),
    [_bannerMobile, onOpen, t, removeMedia],
  );

  const desktop = useMemo(
    () => (
      <MultiBannerItem
        onOpen={onOpen}
        title={t('dropZone.title')}
        imageSize='(347 x 191)'
        sx={{ height: 304, width: '100%' }}
        media={_bannerDesktop}
        onRemove={removeMedia}
      />
    ),
    [_bannerDesktop, onOpen, removeMedia, t],
  );

  return (
    <Stack
      sx={{
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'end',
        gap: 1,
      }}
    >
      <Stack sx={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
        <BannerFormPaperTitle title={t('fields.banner.title')} subtitle={t('fields.banner.subtitle')} />
        <BannerToggle view={view} onChange={onChange} />
      </Stack>

      <Stack sx={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
        {view === 'desktop' && desktop}
        {view === 'mobile' && mobile}
      </Stack>
      <CollectionMediaModal open={isOpen} onClose={onClose} title='modal.title' />
    </Stack>
  );
};

export default memo(FormBannerCheckForm);
