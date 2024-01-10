import { memo } from 'react';
import { Stack } from '@mui/material';
import { useToggle } from '@dfl/hook-utils';
import { ReactLink } from '@dfl/react-security';
import { useDeleteProducts } from 'modules/inventory/provider/supplier/hooks/useDeleteProducts';
import { DeleteRowAction, EditRowActions } from '@dfl/mui-admin-layout';

type ProductsRowActionsProps = {
  rowId: string;
};

const SupplierRowActions = ({ rowId }: ProductsRowActionsProps) => {
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

export default memo(SupplierRowActions);
