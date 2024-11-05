import { memo } from 'react';
import { Stack } from '@mui/material';
import { useToggle } from '@dfl/hook-utils';
import { useDeleteProduct } from 'modules/inventory/product/hooks/useDeleteProduct';
import { DeleteRowAction, EditRowActions } from '@dfl/mui-admin-layout';
import { useNavigate } from 'react-router';

type UserStatusProps = {
  rowId: string;
};

const ProductRowActions = ({ rowId }: UserStatusProps) => {
  const { isOpen, onClose, onOpen } = useToggle();
  const navigate = useNavigate();
  const { mutate, isLoading, error } = useDeleteProduct(rowId, onClose);
  const goTo = () => {
    navigate(`/inventory/products/${rowId}/general?edit=true`);
  };
  return (
    <>
      <Stack direction='row' spacing={1} justifyContent={'center'}>
        <EditRowActions onClick={goTo} />
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

export default memo(ProductRowActions);
