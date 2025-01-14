import { memo, useState } from 'react';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, Stack, Tab } from '@mui/material';
import BannerMediaActions from './BannerMediaActions';
import { useTranslation } from 'react-i18next';
import { BannerFileFormContent } from '../BannerFileForm';
import { MediaGalleryContainer } from 'modules/cms/medias/components/MediaGallery';

type Props = {
  onClose: VoidFunction;
};
const BannerMediaTabs = ({ onClose }: Props) => {
  const [value, setValue] = useState('1');
  const { t } = useTranslation('banner');
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <Stack>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label='media-tabs'>
            <Tab label={t('modal.tabs.uploadFile')} value='1' />
            <Tab label={t('modal.tabs.storeFile')} value='2' />
            <BannerMediaActions onClose={onClose} />
          </TabList>
        </Box>
        <TabPanel value='1' sx={{ px: 0 }}>
          <BannerFileFormContent />
        </TabPanel>
        <TabPanel value='2' sx={{ px: 0 }}>
          <MediaGalleryContainer />
        </TabPanel>
      </TabContext>
    </Stack>
  );
};

export default memo(BannerMediaTabs);
