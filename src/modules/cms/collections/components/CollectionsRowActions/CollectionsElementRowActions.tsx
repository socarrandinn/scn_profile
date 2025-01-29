import { memo } from 'react';
import { Stack } from '@mui/material';
import { useToggle } from '@dfl/hook-utils';
import { DeleteRowAction } from '@dfl/mui-admin-layout';
import { useDeleteCollectionElement } from '../../hooks/useDeleteCollectionElement';
import { useCollectionDetails } from '../../context/CollectionContext';

type UserStatusProps = {
  rowId: string;
};

const CollectionsElementRowActions = ({ rowId }: UserStatusProps) => {
  const { isOpen, onClose, onOpen } = useToggle();
  const { collectionId } = useCollectionDetails();

  const { mutate, isLoading, error } = useDeleteCollectionElement(rowId, collectionId as string, onClose);
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
