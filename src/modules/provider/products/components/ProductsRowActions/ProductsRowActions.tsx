import { memo } from 'react';
import { Stack } from '@mui/material';
import { useToggle } from '@dfl/hook-utils';
import { ReactLink } from '@dfl/react-security';
import { useDeleteProducts } from 'modules/provider/products/hooks/useDeleteProducts';
import { DeleteRowAction, EditRowActions } from '@dfl/mui-admin-layout';

type UserStatusProps = {
  rowId: string;
};

const ProductsRowActions = ({ rowId }: UserStatusProps) => {
  const { isOpen, onClose, onOpen } = useToggle();
  const { mutate, isLoading, error } = useDeleteProducts(rowId, onClose);
  return (
    <>
      <Stack direction='row' spacing={1}>
        <ReactLink to={`/provider/products/${rowId}/edit`}>
          <EditRowActions />
        </ReactLink>
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

export default memo(ProductsRowActions);
