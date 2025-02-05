import { memo } from 'react';
import { Stack } from '@mui/material';
import { useToggle } from '@dfl/hook-utils';
import { useParamsLink } from '@dfl/react-security';
import { useDeleteCollections } from 'modules/cms/collections/hooks/useDeleteCollections';
import { DeleteRowAction, EditRowActions } from '@dfl/mui-admin-layout';
import { ICollection } from '../../interfaces';

type UserStatusProps = {
  rowId: string;
  record: ICollection;
};

const CollectionsRowActions = ({ rowId, record }: UserStatusProps) => {
  const { isOpen, onClose, onOpen } = useToggle();
  const handleEdit = useParamsLink({ edit: rowId });
  const { mutate, isLoading, error } = useDeleteCollections(rowId, onClose, record?.contentType as any);
  return (
    <>
      <Stack direction='row' spacing={1}>
        <EditRowActions onClick={handleEdit} />
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

export default memo(CollectionsRowActions);
