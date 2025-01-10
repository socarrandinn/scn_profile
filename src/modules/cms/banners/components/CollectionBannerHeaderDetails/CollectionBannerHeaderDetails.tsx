import { memo } from 'react';
import { Box, Button } from '@mui/material';
import { PermissionCheck } from '@dfl/react-security';
import HeaderSummaryTabsSkeleton from 'modules/inventory/provider/common/components/HeaderSummaryTabs/HeaderSummaryTabsSkeleton';
import { Add } from '@mui/icons-material';
import { COLLECTIONS_PERMISSIONS } from '../../../collections/constants';
import { CollectionBannerDeleteActions } from '../BannerDetails/CollectionBannerDetailActions';

import BannerHeader from '../BannerDetails/BannerHeader/BannerHeader';
import { DateValue } from '@dfl/mui-react-common';
import { useCollectionDetails } from '../../../collections/context/CollectionContext';

const CollectionBannerHeaderDetails = () => {
  const { collection, isLoading, error } = useCollectionDetails();
  if (isLoading || error) return <HeaderSummaryTabsSkeleton />;

  return (
    <BannerHeader
      title={collection?.name || ''}
      subtitle={<DateValue value={collection?.createdAt} />}
      actions={<Actions />}
    />
  );
};

export default memo(CollectionBannerHeaderDetails);

export const Actions = () => {
  return (
    <Box display={'flex'} gap={1} alignItems={'center'}>
      <PermissionCheck permissions={COLLECTIONS_PERMISSIONS.COLLECTIONS_WRITE}>
        <Button startIcon={<Add />} variant='contained'>
          Añadir banner
        </Button>
        <CollectionBannerDeleteActions />
      </PermissionCheck>
    </Box>
  );
};
