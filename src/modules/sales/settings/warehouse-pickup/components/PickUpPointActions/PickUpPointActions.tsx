import { memo } from 'react';
import { useToggle } from '@dfl/hook-utils';
import { Stack } from '@mui/material';
import { EditRowActions, DeleteRowAction } from '@dfl/mui-admin-layout';
import { useParamsLink } from '@dfl/react-security';
import { useDeletePickUpPointPlaces } from '../../hooks/useDeletePickUpPointPlaces';

type PickUpPointActionsProps = {
  rowId: string;
};

const PickUpPointActions = ({ rowId }: PickUpPointActionsProps) => {
  const { isOpen, onClose, onOpen } = useToggle();
  const handleEdit = useParamsLink({ type: 'point', edit: rowId });
  const { mutate, isLoading, error } = useDeletePickUpPointPlaces(rowId, onClose);

  return (
    <Stack direction={'row'}>
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
  );
};

export default memo(PickUpPointActions);
