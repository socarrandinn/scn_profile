import { memo } from 'react';
import { Stack } from '@mui/material';
import MediaListSkeleton from 'modules/cms/medias/components/MediaGallery/MediaList/MediaListSkeleton';
import { mediaFilters } from 'modules/cms/medias/constants/medias.filters';
import BannerList from './BannerList';
import BannerToolbar from './BannerToolbar';
import { useFindBanners } from '../../hooks/useFindBanners';
import { TableProvider, useTablePagination } from '@dfl/mui-admin-layout';
import { CustomPaginate } from 'components/libs/CoustomPaginate';

const BannerGallery = () => {
  const { data, isLoading, error } = useFindBanners();
  const { onPageChange, onRowsPerPageChange, page, rowsPerPage } = useTablePagination();
  if (isLoading) return <MediaListSkeleton />;

  return (
    <Stack>
      <BannerList banners={data?.data} error={error} isLoading={isLoading} />
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
