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
  const { settings } = useToolbarSetting();
  const { isOpen, onClose, onOpen } = useToggle(false);
  const { t } = useTranslation('warehouse');
  const { warehouseId } = useWarehouseDetail();

  const _initValue = useMemo(
    () => ({
      ...initialUserInviteValue,
      warehouse: warehouseId as unknown as IWarehouse,
    }),
    [warehouseId],
  );

  return (
    <>
      <TableToolbar selectActions={<Stack direction={'row'} spacing={1} />}>
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
