import { memo } from 'react';
import { Box } from '@mui/material';
import { PermissionCheck } from '@dfl/react-security';
import HeaderSummaryTabsSkeleton from 'modules/inventory/provider/common/components/HeaderSummaryTabs/HeaderSummaryTabsSkeleton';
import { useCollectionDetails } from '../../../collections/context/CollectionContext';
import { DateValue } from '@dfl/mui-react-common';
import BannerHeader from '../BannerHeader/BannerHeader';
import { COLLECTIONS_PERMISSIONS } from '../../../collections/constants';
import { CollectionBannerDeleteActions } from '../CollectionBannerDetailActions';
import CollectionBannerAddActions from '../CollectionBannerDetailActions/CollectionBannerAddActions';

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
        <CollectionBannerAddActions />
        <CollectionBannerDeleteActions />
      </PermissionCheck>
    </Box>
  );
};
