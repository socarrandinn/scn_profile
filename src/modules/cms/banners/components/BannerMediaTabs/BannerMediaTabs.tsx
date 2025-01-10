import { memo, useState } from 'react';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, Stack, Tab } from '@mui/material';
import BannerMediaActions from './BannerMediaActions';

type Props = {
  onClose: VoidFunction;
};
const BannerMediaTabs = ({ onClose }: Props) => {
  const [value, setValue] = useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <Stack>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label='lab API tabs example'>
            <Tab label='Item One' value='1' />
            <Tab label='Item Two' value='2' />
          </TabList>
        </Box>
        <TabPanel value='1'>Item One</TabPanel>
        <TabPanel value='2'>Item Two</TabPanel>
      </TabContext>

      {/* accion tabs  */}
      <BannerMediaActions onClose={onClose} />
    </Stack>
  );
};

export default memo(BannerMediaTabs);
