import { memo, useEffect, useState } from 'react';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, Stack, Tab } from '@mui/material';
import BannerMediaActions from './BannerMediaActions';
import { useTranslation } from 'react-i18next';
import { MediaGalleryContainer } from 'modules/cms/medias/components/MediaGallery';
import { useBannerContext } from '../../context/useBannerContext';
import BannerFileFormContent from '../BannerFileForm/BannerFileFormContent';

type Props = {
  onClose: VoidFunction;
};

type TabType = 'UPLOAD' | 'STORE';
const BannerMediaTabs = ({ onClose }: Props) => {
  const [value, setValue] = useState<TabType>('STORE');
  const { t } = useTranslation('banner');
  const handleChange = (event: React.SyntheticEvent, newValue: TabType) => {
    setValue(newValue);
  };

  const { setAction } = useBannerContext();

  useEffect(() => {
    setAction({ showCheckMedia: true });
  }, [setAction]);

  return (
    <Stack>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label='media-tabs'>
            <Tab label={t('modal.tabs.uploadFile')} value='UPLOAD' />
            <Tab label={t('modal.tabs.storeFile')} value='STORE' />
            <BannerMediaActions onClose={onClose} />
          </TabList>
        </Box>
        <TabPanel value='UPLOAD' sx={{ px: 0 }}>
          <BannerFileFormContent />
        </TabPanel>
        <TabPanel value='STORE' sx={{ px: 0 }}>
          <MediaGalleryContainer />
        </TabPanel>
      </TabContext>
    </Stack>
  );
};

export default memo(BannerMediaTabs);
