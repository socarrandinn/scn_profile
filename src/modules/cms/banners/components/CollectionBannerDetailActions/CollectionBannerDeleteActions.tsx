import { memo } from 'react';
import DeleteButton from 'components/Actions/DeleteAction/DeleteButton';
import { useCollectionDetails } from 'modules/cms/collections/context/CollectionContext';
import { useDeleteCollections } from 'modules/cms/collections/hooks/useDeleteCollections';

const CollectionBannerDeleteActions = () => {
  const { collectionId } = useCollectionDetails();
  const { mutate, isLoading } = useDeleteCollections(collectionId as string, () => 'void', true);
  return <DeleteButton isLoading={isLoading} onDelete={mutate} />;
};

export default memo(CollectionBannerDeleteActions);
