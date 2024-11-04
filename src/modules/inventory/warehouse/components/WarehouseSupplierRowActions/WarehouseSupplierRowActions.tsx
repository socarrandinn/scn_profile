import { memo, useMemo } from 'react';
import { Stack } from '@mui/material';
import { useToggle } from '@dfl/hook-utils';
import { DeleteRowAction } from '@dfl/mui-admin-layout';
import { useDeleteWarehouseSupplier } from '../../hooks/useDeleteWarehouseSupplier';
import { IWarehouseSupplier } from '../../interfaces/IWarehouseSupplier';
import { IWarehouse } from '../../interfaces';
import WarehouseSupplierCommissionRowAction from './WarehouseSupplierCommissionRowAction';

type WarehouseSupplierRowActionsProps = {
  rowId: string;
  record: IWarehouseSupplier;
};

const WarehouseSupplierRowActions = ({ record, rowId }: WarehouseSupplierRowActionsProps) => {
  const { isOpen, onClose, onOpen } = useToggle();
  const warehouse = useMemo(() => record?.warehouse as IWarehouse, [record?.warehouse]);
  const { mutate, isLoading, error } = useDeleteWarehouseSupplier(rowId, warehouse?._id as string, onClose);

  return (
    <Stack direction='row' spacing={1}>
      <WarehouseSupplierCommissionRowAction
        initValue={{ warehouse: warehouse?._id as string, supplier: rowId, priceConfig: record?.priceConfig }}
      />
      <DeleteRowAction
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        error={error}
        isLoading={isLoading}
        onDelete={mutate}
        disabled={record?.isDefault}
      />
    </Stack>
  );
};

export default memo(WarehouseSupplierRowActions);
