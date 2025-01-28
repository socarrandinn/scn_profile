import { memo } from 'react';
import { RouterTab } from '@dfl/react-security';
import HeaderSummaryTabsSkeleton from 'modules/inventory/provider/common/components/HeaderSummaryTabs/HeaderSummaryTabsSkeleton';
import { useCollectionDetails } from '../../context/CollectionContext';
import { HeaderSummaryTabs } from 'modules/inventory/provider/common/components/HeaderSummaryTabs';
import { collectionDetailsTabs } from '../../constants/collection.tabs.details';
import { COLLECTION_CONTENT_TYPE } from '../../constants/collection-types';

type Props = {
  contentType: COLLECTION_CONTENT_TYPE;
};
const CollectionHeaderDetails = ({ contentType }: Props) => {
  const { collection, collectionId, isLoading, error } = useCollectionDetails();
  if (isLoading || error) return <HeaderSummaryTabsSkeleton />;

  return (
    <HeaderSummaryTabs
      title={collection?.name || ''}
      subtitle={collection?.description || ''}
      hideImage
      actions={<></>}
    >
      <RouterTab
        tabs={collectionDetailsTabs}
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

/* export const Actions = () => {
  return (
    <Box display={'flex'} gap={1} alignItems={'center'}>
      <PermissionCheck permissions={COLLECTIONS_PERMISSIONS.COLLECTIONS_WRITE}>
        <CollectionBannerAddActions />
        <CollectionBannerDeleteActions />
      </PermissionCheck>
    </Box>
  );
}; */
