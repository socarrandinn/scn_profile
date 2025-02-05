import { memo } from 'react';
import { Stack } from '@mui/material';
import { useToggle } from '@dfl/hook-utils';
import { DeleteRowAction } from '@dfl/mui-admin-layout';
import { useDeleteCollectionElement } from '../../hooks/useDeleteCollectionElement';
import { useCollectionDetails } from '../../context/CollectionContext';
import { COLLECTION_CONTENT_TYPE } from '../../constants/collection-types';

type UserStatusProps = {
  rowId: string;
};

const CollectionsElementRowActions = ({ rowId }: UserStatusProps) => {
  const { isOpen, onClose, onOpen } = useToggle();
  const { collectionId, contentType } = useCollectionDetails();

  const { mutate, isLoading, error } = useDeleteCollectionElement(
    rowId,
    collectionId as string,
    contentType as COLLECTION_CONTENT_TYPE,
    onClose,
  );
  return (
    <>
      <Stack direction='row' spacing={1} justifyContent={'center'}>
        <DeleteRowAction
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
          error={error}
          isLoading={isLoading}
          onDelete={mutate}
        />
      </Stack>
    </>
  );
};

export default memo(CollectionsElementRowActions);
