import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { TableToolbar, TableToolbarActions, TablaHeaderOptions, AddButton } from '@dfl/mui-admin-layout';
import { PermissionCheck } from '@dfl/react-security';
import { useToggle } from '@dfl/hook-utils';

import { GeneralActions } from 'layouts/portals';
import { CreateSupplierUserModal } from '../CreateSupplierUserModal';
import { SUPPLIER_PERMISSIONS } from 'modules/inventory/provider/supplier/constants';
import { useProviderProductsDetail } from 'modules/inventory/provider/supplier/context/ProviderProductDetail';

const settings: TablaHeaderOptions = {
  filter: {
    disabled: true,
  },
  actions: {
    export: false,
    create: false,
  },
};

const SupplierUsersToolbar = () => {
  const { isOpen, onClose, onOpen } = useToggle(false);
  const { t } = useTranslation('supplier');
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

      <CreateSupplierUserModal open={isOpen} onClose={onClose} title={t('form.title')} />
    </>
  );
};

export default memo(SupplierUsersToolbar);
