import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { TableToolbar, TableToolbarActions, TablaHeaderOptions, AddButton } from '@dfl/mui-admin-layout';
import { PermissionCheck } from '@dfl/react-security';
import { useToggle } from '@dfl/hook-utils';

import { GeneralActions } from 'layouts/portals';
import { LOGISTICS_PERMISSIONS } from 'modules/inventory/provider/logistics/constants';
import { CreateLogisticUserModal } from 'modules/inventory/provider/logistics/components/CreateLogisticUserModal';
import { useLogisticsDetailContext } from 'modules/inventory/provider/logistics/context/LogisticDetail';

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
  const { isLoading } = useLogisticsDetailContext();

  return (
    <>
      <TableToolbar>
        <TableToolbarActions settings={settings} />
      </TableToolbar>
      <GeneralActions>
        {!isLoading && (
          <PermissionCheck permissions={LOGISTICS_PERMISSIONS.LOGISTICS_WRITE}>
            <AddButton action={onOpen} />
          </PermissionCheck>
        )}
      </GeneralActions>
      <CreateLogisticUserModal open={isOpen} onClose={onClose} title={t('form.title')} />
    </>
  );
};

export default memo(SupplierUsersToolbar);
