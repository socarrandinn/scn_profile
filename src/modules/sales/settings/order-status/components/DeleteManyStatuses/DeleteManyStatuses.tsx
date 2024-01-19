import { DeleteRowAction } from '@dfl/mui-admin-layout';
import { useDeleteManyOrderStatuses } from '../../hooks/useDeleteManyOrderStatuses';
import { useToggle } from '@dfl/hook-utils';

const DeleteManyStatuses = () => {
  const { isLoading, mutate } = useDeleteManyOrderStatuses();
  const { isOpen, onClose, onOpen } = useToggle(false);

  return (
    <DeleteRowAction
      isOpen={isOpen}
      isLoading={isLoading}
      onClose={onClose}
      onOpen={onOpen}
      onDelete={mutate}
    />
  );
}

export default DeleteManyStatuses
