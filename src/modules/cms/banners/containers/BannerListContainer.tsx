import { memo } from 'react';
import { Table } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import { BannerListToolbar } from 'modules/cms/banners/components/BannerListToolbar';
import { useFindBanners } from '../hooks/useFindBanners';
import { bannerColumns } from '../constants';
import BannerEditModal from './BannerEditModal';

const BannerListContainer = () => {
  const { isLoading, error, data } = useFindBanners();
  return (
    <Box>
      <BannerListToolbar />
      <Table columns={bannerColumns} data={data?.data} total={data?.total} isLoading={isLoading} error={error} />
      <BannerEditModal />
    </Box>
  );
};

export default memo(BannerListContainer);
