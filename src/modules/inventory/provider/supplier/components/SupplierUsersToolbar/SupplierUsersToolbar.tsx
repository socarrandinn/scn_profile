import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { TableToolbar, TableToolbarActions, TablaHeaderOptions, AddButton } from '@dfl/mui-admin-layout';
import { PermissionCheck } from '@dfl/react-security';
import { useToggle } from '@dfl/hook-utils';

import { GeneralActions } from 'layouts/portals';
import { CreateSupplierUserModal } from '../CreateSupplierUserModal';
import { SUPPLIER_PERMISSIONS } from '../../constants';

const settings: TablaHeaderOptions = {
  filter: {
    disabled: true,
  },
  actions: {
    export: false,
    create: false,
  },
};

const StoreListToolbar = () => {
  const { isOpen, onClose, onOpen } = useToggle(false);
  const { t } = useTranslation('supplier');

  return (
    <>
      <TableToolbar>
        <TableToolbarActions settings={settings} />
      </TableToolbar>
      <GeneralActions>
        <PermissionCheck permissions={SUPPLIER_PERMISSIONS.SUPPLIER_WRITE}>
          <AddButton action={onOpen} />
        </PermissionCheck>
      </GeneralActions>

      <CreateSupplierUserModal open={isOpen} onClose={onClose} title={t('form.title')} />
    </>
  );
};

export default memo(StoreListToolbar);
