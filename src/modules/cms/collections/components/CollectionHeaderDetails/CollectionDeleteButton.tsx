import { memo } from 'react';
import DeleteButton from 'components/Actions/DeleteAction/DeleteButton';
import { useCollectionDetails } from 'modules/cms/collections/context/CollectionContext';
import { useDeleteCollections } from 'modules/cms/collections/hooks/useDeleteCollections';

const CollectionDeleteButton = () => {
  const { collectionId, collection } = useCollectionDetails();
  const { mutate, isLoading } = useDeleteCollections(
    collectionId as string,
    () => 'void',
    collection?.contentType as any,
    true,
  );
  return <DeleteButton isLoading={isLoading} onDelete={mutate} />;
};

export default memo(CollectionDeleteButton);
