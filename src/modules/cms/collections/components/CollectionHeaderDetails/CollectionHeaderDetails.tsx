import { memo } from 'react';
import { PermissionCheck } from '@dfl/react-security';
import HeaderSummaryTabsSkeleton from 'modules/inventory/provider/common/components/HeaderSummaryTabs/HeaderSummaryTabsSkeleton';
import { useCollectionDetails } from '../../context/CollectionContext';
import { HeaderSummaryTabs } from 'modules/inventory/provider/common/components/HeaderSummaryTabs';
import { COLLECTION_CONTENT_TYPE, COLLECTION_POSITION } from '../../constants/collection-types';
import { Box, Divider } from '@mui/material';
import { COLLECTIONS_PERMISSIONS } from '../../constants';
import CollectionDeleteButton from './CollectionDeleteButton';
import { COLLECTION_STYLE } from '../../constants/entities.style';
import { useBreadcrumbName } from '@dfl/mui-admin-layout';
import { CollectionStatus } from '../CollectionStatus';
import { CollectionBannerTypeChip } from 'modules/cms/collections/components/CollectionBannerTypeChip/CollectionBannerTypeChip';

import { CollectionPositionStatus } from '../CollectionPositionStatus';

type Props = {
  contentType: COLLECTION_CONTENT_TYPE;
};
const CollectionHeaderDetails = ({ contentType }: Props) => {
  const { collection, isLoading, error } = useCollectionDetails();
  useBreadcrumbName(collection?._id, collection?.name || '');

  if (isLoading || error) return <HeaderSummaryTabsSkeleton />;

  return (
    <HeaderSummaryTabs
      title={collection?.name || ''}
      subtitle={collection?.description || ''}
      hideImage
      actions={<ButtonActions contentType={contentType} />}
      entityStyle={COLLECTION_STYLE}
    />
  );
};

export default memo(CollectionHeaderDetails);

export const ButtonActions = ({ contentType }: Props) => {
  const { collection } = useCollectionDetails();
  return (
    <PermissionCheck permissions={COLLECTIONS_PERMISSIONS.COLLECTIONS_WRITE}>
      <Box display={'flex'} gap={1} alignItems={'center'} mr={{ md: 8 }}>
        {/* status */}
        <CollectionBannerTypeChip subType={collection?.subType} isButton />
        <CollectionStatus status={collection?.active || false} collectionId={collection?._id || ''} isButton />
        {[COLLECTION_CONTENT_TYPE.BANNER, COLLECTION_CONTENT_TYPE.PRODUCT].includes(contentType) && (
          <CollectionPositionStatus
            status={collection?.position as COLLECTION_POSITION}
            collectionId={collection?._id || ''}
            isButton
            contentType={contentType as COLLECTION_CONTENT_TYPE.PRODUCT | COLLECTION_CONTENT_TYPE.BANNER}
          />
        )}

        {<Divider orientation='vertical' flexItem sx={{ mx: 1 }} />}

        {/* actions */}
        <CollectionDeleteButton />
      </Box>
    </PermissionCheck>
  );
};
