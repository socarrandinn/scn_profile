import { memo, useMemo } from 'react';
import { Stack } from '@mui/material';
import { PermissionCheck } from '@dfl/react-security';
import { TableToolbar, TableToolbarActions, TablaHeaderOptions, AddButton, ExportButton } from '@dfl/mui-admin-layout';
import { SUPPLIER_PERMISSIONS } from 'modules/inventory/provider/supplier/constants/supplier.permissions';
import { GeneralActions } from 'layouts/portals';
import WarehouseSupplierCreateModal from 'modules/inventory/warehouse/containers/WarehouseSupplierCreateModal';
import { useToggle } from '@dfl/hook-utils';
import { useTranslation } from 'react-i18next';

interface ToolbarProps {
  data?: any;
}

const useToolbarSetting = () => {
  const settings = useMemo<TablaHeaderOptions>(() => {
    return {
      actions: {
        create: false,
        export: false,
      },
    };
  }, []);

  return {
    settings,
  };
};

const WarehouseSupplierListToolbar = ({ data }: ToolbarProps) => {
  const { settings } = useToolbarSetting();
  const { isOpen, onClose, onOpen } = useToggle();
  const { t } = useTranslation('warehouse');

  return (
    <>
      <TableToolbar
        selectActions={
          <Stack direction={'row'} spacing={1}>
            {/* <PermissionCheck permissions={SUPPLIER_PERMISSIONS.SUPPLIER_WRITE}>
              <CommissionButton />
              <DeleteButton isLoading={isLoading} onDelete={mutate} many />
            </PermissionCheck> */}
          </Stack>
        }
      >
        <TableToolbarActions settings={settings} />
      </TableToolbar>
      <GeneralActions>
        <PermissionCheck permissions={SUPPLIER_PERMISSIONS.SUPPLIER_WRITE}>
          <ExportButton />
          <AddButton action={onOpen} />
          <WarehouseSupplierCreateModal onClose={onClose} open={isOpen} title={t('availableSupplier.create')} />
        </PermissionCheck>
      </GeneralActions>
    </>
  );
};

export default memo(WarehouseSupplierListToolbar);
