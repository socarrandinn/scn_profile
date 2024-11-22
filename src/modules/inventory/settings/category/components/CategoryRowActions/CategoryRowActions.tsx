import { memo } from 'react';
import { Stack } from '@mui/material';
import { useToggle } from '@dfl/hook-utils';
import { useParamsLink } from '@dfl/react-security';
import { useDeleteCategory } from 'modules/inventory/settings/category/hooks/useDeleteCategory';
import { DeleteRowAction, EditRowActions } from '@dfl/mui-admin-layout';
import { DELETE_CATEGORY_ERRORS } from '../../constants/category-errors';

type UserStatusProps = {
  rowId: string;
};

const CategoryRowActions = ({ rowId }: UserStatusProps) => {
  const { isOpen, onClose, onOpen } = useToggle();
  const handleEdit = useParamsLink({ edit: rowId });
  const { mutate, isLoading, error } = useDeleteCategory(rowId, onClose);
  return (
    <>
      <Stack direction='row' spacing={1} justifyContent={'center'}>
        {/* <CategoryOrder rowId={rowId}/> */}
        <EditRowActions onClick={handleEdit} />
        <DeleteRowAction
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
          error={error}
          isLoading={isLoading}
          onDelete={mutate}
          errors={DELETE_CATEGORY_ERRORS}
        />
      </Stack>
    </>
  );
};

export default memo(CategoryRowActions);
