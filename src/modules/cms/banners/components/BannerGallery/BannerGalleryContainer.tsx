import { memo } from 'react';
import { ChildrenProps, NotSearchResult } from '@dfl/mui-react-common';
import { Box, Stack } from '@mui/material';
import MediaListSkeleton from 'modules/cms/medias/components/MediaGallery/MediaList/MediaListSkeleton';
import { mediaFilters } from 'modules/cms/medias/constants/medias.filters';
import BannerList from './BannerList';
import BannerToolbar from './BannerToolbar';
import { useFindBanners } from '../../hooks/useFindBanners';
import { TableProvider, useTablePagination } from '@dfl/mui-admin-layout';
import { CustomPaginate } from 'components/libs/CoustomPaginate';

const ContentResult = ({ children }: ChildrenProps) => (
  <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: 'center' }} mt={4}>
    {children}
  </Box>
);
const BannerGallery = () => {
  const { data, isLoading, error } = useFindBanners();
  const { onPageChange, onRowsPerPageChange, page, rowsPerPage } = useTablePagination();
  if (isLoading) return <MediaListSkeleton />;

  if (error) {
    return (
      <ContentResult>
        <MediaListSkeleton />
      </ContentResult>
    );
  }

  if (data?.data?.length === 0) {
    return (
      <ContentResult>
        <NotSearchResult />
      </ContentResult>
    );
  }

  return (
    <Stack>
      <BannerList banners={data?.data} />
      <CustomPaginate
        {...{
          total: data?.total || 0,
          isLoading: isLoading || false,
          rowsPerPage,
          page,
          onPageChange,
          onRowsPerPageChange,
          rowsPerPageOptions: [10, 16, 24, 48],
        }}
      />
    </Stack>
  );
};

const BannerGalleryContainer = () => {
  return (
    <TableProvider id={'banner-gallery'} filters={mediaFilters}>
      <BannerToolbar />
      <BannerGallery />
    </TableProvider>
  );
};
export default memo(BannerGalleryContainer);
