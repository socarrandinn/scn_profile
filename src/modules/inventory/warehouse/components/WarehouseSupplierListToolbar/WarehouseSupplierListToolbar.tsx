import { memo, useMemo } from 'react';
import { Stack } from '@mui/material';
import { PermissionCheck } from '@dfl/react-security';
import { TableToolbar, AddButton } from '@dfl/mui-admin-layout';
import { SUPPLIER_PERMISSIONS } from 'modules/inventory/provider/supplier/constants/supplier.permissions';
import { GeneralActions } from 'layouts/portals';
import WarehouseSupplierCreateModal from 'modules/inventory/warehouse/containers/WarehouseSupplierCreateModal';
import { useToggle } from '@dfl/hook-utils';
import { useTranslation } from 'react-i18next';
import { TableHeaderOptions } from 'components/libs/table';
import TableToolbarActions from 'components/libs/table/toolbar/TableToolbarActions';
import { useWarehouseDetail } from '../../context/WarehouseContext';
import { initialUserInviteValue } from '../../hooks/useWarehouseProviderSupplierCreateForm';
import { IWarehouse } from '../../interfaces';
import ChangeManyStatusButton from 'components/VisibilityAction/ChangeManyStatusButton';
import { PRODUCT_STATUS } from 'modules/inventory/product/constants/product_status';
import { useDeleteManyWarehousesSupplier } from '../../hooks/useDeleteManyWarehousesSupplier';
import DeleteButton from 'components/DeleteAction/DeleteButton';
import { useVisibilityManyWarehousesSupplier } from '../../hooks/useVisibilityManyWarehousesSupplier';

interface ToolbarProps {
  data?: any;
}

const useToolbarSetting = () => {
  const settings = useMemo<TableHeaderOptions>(() => {
    return {
      actions: {
        create: false,
        export: false,
      },
      filter: {
        activeMenu: true,
      },
    };
  }, []);

  return {
    settings,
  };
};

const WarehouseSupplierListToolbar = ({ data }: ToolbarProps) => {
  const { t } = useTranslation(['warehouse', 'product', 'dialog']);
  const { settings } = useToolbarSetting();
  const { isOpen, onClose, onOpen } = useToggle(false);
  const { warehouseId } = useWarehouseDetail();
  const { isLoading, mutateAsync, reset } = useDeleteManyWarehousesSupplier(warehouseId);
  const { isLoading: isVisibilityLoading, mutate: visibilityMutate } = useVisibilityManyWarehousesSupplier(warehouseId);

  const _initValue = useMemo(
    () => ({
      ...initialUserInviteValue,
      warehouse: warehouseId as unknown as IWarehouse,
    }),
    [warehouseId],
  );

  return (
    <>
      <TableToolbar
        selectActions={
          <Stack direction={'row'} spacing={1}>
            <DeleteButton
              isLoading={isLoading}
              onDelete={mutateAsync}
              many
              customConfirmation={t('dialog:supplier.deleteMany')}
              reset={reset}
            />
            <ChangeManyStatusButton
              isLoading={isVisibilityLoading}
              onChange={visibilityMutate}
              title={t('common:visibilityMany')}
              options={PRODUCT_STATUS?.map((s) => ({ ...s, title: t(`product:${s.title}`) }))}
            />
          </Stack>
        }
      >
        <TableToolbarActions settings={settings} />
      </TableToolbar>
      <GeneralActions>
        <PermissionCheck permissions={SUPPLIER_PERMISSIONS.SUPPLIER_WRITE}>
          <AddButton action={onOpen} />
        </PermissionCheck>
      </GeneralActions>
      <WarehouseSupplierCreateModal
        onClose={onClose}
        open={isOpen}
        title={t('availableSupplier.create')}
        initValue={_initValue}
      />
    </>
  );
};

export default memo(WarehouseSupplierListToolbar);
