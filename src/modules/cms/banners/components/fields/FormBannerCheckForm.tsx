import { memo, useCallback, useMemo } from 'react';
import { useCollectionBannerContext } from '../../context/useCollectionBannerContext';
import { Stack } from '@mui/material';
import BannerToggle from '../BannerToggle/BannerToggle';
import MultiBannerItem from '../MultiBannerList/MultiBannerItem';
import { useTranslation } from 'react-i18next';
import { useToggle } from '@dfl/hook-utils';
import CollectionMediaModal from '../../containers/CollectionMediaModal';
import { BannerFormPaperTitle } from '../BannerFormPaperTitle';
import useCollectionPositionContext from '../../context/useCollectionPositionContext';
import { getComponentSize } from '../../constants/banner.sizes';
import { COLLECTION_BANNER_TYPE } from 'modules/cms/collections/constants/collection-types';

const textSizeMobile = {
  '& .MuiTypography-root': { fontSize: '10px !important' },
};
const iconSize = '32px';

const FormBannerCheckForm = () => {
  const { t } = useTranslation('banner');
  const { isOpen, onOpen, onClose } = useToggle(false);
  const { setView, view } = useCollectionBannerContext();
  const media = useCollectionBannerContext((state) => state.media);
  const removeMedia = useCollectionBannerContext((state) => state.removeMedia);
  const { collection } = useCollectionPositionContext();
  const sizes = getComponentSize(collection?.bannerType as COLLECTION_BANNER_TYPE, collection?.position);

  const sizeTitle = useCallback((width: string, height: string) => {
    if (width && height) {
      return `(${width} x ${height})`;
    }
    return '(390 x 390)';
  }, []);

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
        imageSize={sizeTitle(sizes?.mobile?.width, sizes?.mobile?.height)}
        sx={{
          height: 191,
          width: '100%',
          maxWidth: 191,
          ...textSizeMobile,
        }}
        media={_bannerMobile}
        onRemove={removeMedia}
      />
    ),
    [onOpen, t, sizeTitle, sizes?.mobile?.width, sizes?.mobile?.height, _bannerMobile, removeMedia],
  );

  const desktop = useMemo(
    () => (
      <MultiBannerItem
        onOpen={onOpen}
        title={t('dropZone.title')}
        imageSize={sizeTitle(sizes?.desktop?.width, sizes?.desktop?.height)}
        sx={{ height: 191, width: '100%' }}
        media={_bannerDesktop}
        onRemove={removeMedia}
      />
    ),
    [_bannerDesktop, onOpen, removeMedia, sizeTitle, sizes?.desktop?.height, sizes?.desktop?.width, t],
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
