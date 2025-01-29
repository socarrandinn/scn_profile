import { memo } from 'react';

import HeaderSummaryTabsSkeleton from 'modules/inventory/provider/common/components/HeaderSummaryTabs/HeaderSummaryTabsSkeleton';
import { useCollectionDetails } from '../../../collections/context/CollectionContext';
import { DateValue } from '@dfl/mui-react-common';
import BannerHeader from '../BannerHeader/BannerHeader';
import { Box } from '@mui/material';
import { PermissionCheck } from '@dfl/react-security';
import { COLLECTIONS_PERMISSIONS } from 'modules/cms/collections/constants';
import { COLLECTION_CONTENT_TYPE } from 'modules/cms/collections/constants/collection-types';
import CollectionAddElementButton from 'modules/cms/collections/components/CollectionHeaderDetails/CollectionAddElementButton';
import CollectionDeleteButton from 'modules/cms/collections/components/CollectionHeaderDetails/CollectionDeleteButton';

const CollectionBannerHeaderDetails = () => {
  const { collection, isLoading, error } = useCollectionDetails();
  if (isLoading || error) return <HeaderSummaryTabsSkeleton />;

  return (
    <BannerHeader
      title={collection?.name || ''}
      subtitle={<DateValue value={collection?.createdAt} />}
      actions={<ButtonActions />}
    />
  );
};

export default memo(CollectionBannerHeaderDetails);

export const ButtonActions = () => {
  return (
    <Box display={'flex'} gap={1} alignItems={'center'}>
      <PermissionCheck permissions={COLLECTIONS_PERMISSIONS.COLLECTIONS_WRITE}>
        <CollectionAddElementButton contentType={COLLECTION_CONTENT_TYPE.BANNER} />
        <CollectionDeleteButton />
      </PermissionCheck>
    </Box>
  );
};
