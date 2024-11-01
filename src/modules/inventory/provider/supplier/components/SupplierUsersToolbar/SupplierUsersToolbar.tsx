import { memo } from 'react';
import { TableToolbar, AddButton } from '@dfl/mui-admin-layout';
import { PermissionCheck } from '@dfl/react-security';
import { useToggle } from '@dfl/hook-utils';
import { GeneralActions } from 'layouts/portals';
import { SUPPLIER_PERMISSIONS } from 'modules/inventory/provider/supplier/constants';
import { useProviderProductsDetail } from 'modules/inventory/provider/supplier/context/ProviderProductDetail';
import SupplierAddUserInviteEditModal from '../../containers/SupplierAddUserInviteEditModal';
import { TableHeaderOptions } from 'components/libs/table';
import TableToolbarActions from 'components/libs/table/toolbar/TableToolbarActions';

const settings: TableHeaderOptions = {
  filter: {
    activeMenu: true,
  },
  actions: {
    export: false,
    create: false,
  },
};

const SupplierUsersToolbar = () => {
  const { isOpen, onClose, onOpen } = useToggle(false);
  const { isLoading } = useProviderProductsDetail();

  return (
    <>
      <TableToolbar>
        <TableToolbarActions settings={settings} />
      </TableToolbar>
      <GeneralActions>
        {!isLoading && (
          <PermissionCheck permissions={SUPPLIER_PERMISSIONS.SUPPLIER_WRITE}>
            <AddButton action={onOpen} />
          </PermissionCheck>
        )}
      </GeneralActions>

      <SupplierAddUserInviteEditModal open={isOpen} onClose={onClose} />
    </>
  );
};

export default memo(SupplierUsersToolbar);
