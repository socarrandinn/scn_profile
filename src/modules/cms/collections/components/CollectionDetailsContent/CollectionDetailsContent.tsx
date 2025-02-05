import { memo } from 'react';
import { RouteLoader } from '@dfl/react-security';

import { ConditionContainer, PageLoader } from '@dfl/mui-react-common';
import { useCollectionDetails } from '../../context/CollectionContext';
import collectionDetailsRouters from '../../routes/collection-details';
import { COLLECTION_CONTENT_TYPE } from '../../constants/collection-types';

type Props = { contentType: COLLECTION_CONTENT_TYPE };
const CollectionDetailsContent = ({ contentType }: Props) => {
  const { collectionId, isLoading } = useCollectionDetails();

  return (
    <ConditionContainer active={!isLoading} alternative={<PageLoader />}>
      <RouteLoader
        routes={collectionDetailsRouters(contentType)}
        notfoundRedirect={`/cms/collections/${collectionId as string}/${contentType}/elements`}
      />
    </ConditionContainer>
  );
};

export default memo(CollectionDetailsContent);
