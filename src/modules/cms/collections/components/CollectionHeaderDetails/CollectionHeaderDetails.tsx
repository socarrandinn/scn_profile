import { memo } from 'react';
import { PermissionCheck, RouterTab } from '@dfl/react-security';
import HeaderSummaryTabsSkeleton from 'modules/inventory/provider/common/components/HeaderSummaryTabs/HeaderSummaryTabsSkeleton';
import { useCollectionDetails } from '../../context/CollectionContext';
import { HeaderSummaryTabs } from 'modules/inventory/provider/common/components/HeaderSummaryTabs';
import { collectionDetailsTabs } from '../../constants/collection.tabs.details';
import { COLLECTION_CONTENT_TYPE } from '../../constants/collection-types';
import { Box } from '@mui/material';
import { COLLECTIONS_PERMISSIONS } from '../../constants';
import CollectionAddElementButton from './CollectionAddElementButton';
import CollectionDeleteButton from './CollectionDeleteButton';
import { COLLECTION_STYLE } from '../../constants/entities.style';
import { useBreadcrumbName } from '@dfl/mui-admin-layout';
import { CollectionStatus } from '../CollectionStatus';

type Props = {
  contentType: COLLECTION_CONTENT_TYPE;
};
const CollectionHeaderDetails = ({ contentType }: Props) => {
  const { collection, collectionId, isLoading, error } = useCollectionDetails();
  useBreadcrumbName(collection?._id, collection?.name || '');

  if (isLoading || error) return <HeaderSummaryTabsSkeleton />;

  return (
    <HeaderSummaryTabs
      title={collection?.name || ''}
      subtitle={collection?.description || ''}
      hideImage
      actions={<ButtonActions contentType={contentType} />}
      entityStyle={COLLECTION_STYLE}
    >
      <RouterTab
        tabs={collectionDetailsTabs(contentType)}
        prefix={`/cms/collections/${collectionId as string}/${contentType}`}
        translationNs={'collection'}
        variant='scrollable'
        scrollButtons='auto'
        allowScrollButtonsMobile
      />
    </HeaderSummaryTabs>
  );
};

export default memo(CollectionHeaderDetails);

export const ButtonActions = ({ contentType }: Props) => {
  const { collection } = useCollectionDetails();
  return (
    <PermissionCheck permissions={COLLECTIONS_PERMISSIONS.COLLECTIONS_WRITE}>
      <Box display={'flex'} gap={1} alignItems={'center'} mr={{ md: 8 }}>
        <CollectionAddElementButton contentType={contentType} />
        <CollectionDeleteButton />
        <CollectionStatus status={collection?.active || false} collectionId={collection?._id || ''} isButton />
      </Box>
    </PermissionCheck>
  );
};
