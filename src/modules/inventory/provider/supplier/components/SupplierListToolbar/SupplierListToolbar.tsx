import { memo, useCallback, useMemo } from 'react';
import { Stack } from '@mui/material';
import { PermissionCheck } from '@dfl/react-security';
import { TableToolbar, AddButton, ExportButton } from '@dfl/mui-admin-layout';
import { SUPPLIER_PERMISSIONS } from 'modules/inventory/provider/supplier/constants/supplier.permissions';
import { GeneralActions } from 'layouts/portals';
import { useNavigate } from 'react-router';
import { TableHeaderOptions } from 'components/libs/table';
import TableToolbarActions from 'components/libs/table/toolbar/TableToolbarActions';

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

const SupplierListToolbar = ({ data }: ToolbarProps) => {
  const { settings } = useToolbarSetting();
  const navigate = useNavigate();

  const onCreateSupplier = useCallback(() => {
    navigate('/inventory/settings/suppliers/create');
  }, [navigate]);

  return (
    <>
      <TableToolbar selectActions={<Stack direction={'row'} spacing={1} />}>
        <TableToolbarActions settings={settings} />
      </TableToolbar>
      <GeneralActions>
        <PermissionCheck permissions={SUPPLIER_PERMISSIONS.SUPPLIER_WRITE}>
          <ExportButton disabled />
          <AddButton action={onCreateSupplier} />
        </PermissionCheck>
      </GeneralActions>
    </>
  );
};

export default memo(SupplierListToolbar);
