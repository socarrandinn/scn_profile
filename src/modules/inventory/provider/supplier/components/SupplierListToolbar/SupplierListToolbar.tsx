import { memo, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router';
import { Stack } from '@mui/material';
import { PermissionCheck } from '@dfl/react-security';
import { TableToolbar, TableToolbarActions, TablaHeaderOptions, AddButton, ExportButton } from '@dfl/mui-admin-layout';

import { SUPPLIER_PERMISSIONS } from 'modules/inventory/provider/supplier/constants/supplier.permissions';
import { GeneralActions } from 'layouts/portals';
import DeleteButton from 'components/DeleteAction/DeleteButton';
import { useDeleteManyProducts } from '../../hooks/useDeleteManyProducts';
import { CommissionModalActions } from '../CommissionModalActions';
import { useToggle } from '@dfl/hook-utils';
import CommissionButton from 'modules/inventory/provider/common/components/CommissionButton/CommissionButton';
import { useTranslation } from 'react-i18next';

const useToolbarSetting = () => {
  const navigate = useNavigate();
  const onOpen = useCallback(() => {
    navigate('/inventory/settings/suppliers/create');
  }, [navigate]);

  const settings = useMemo<TablaHeaderOptions>(() => {
    return {
      actions: {
        create: false,
        export: false,
      },
    };
  }, [onOpen]);

  return {
    onOpen,
    settings,
  };
};

const SupplierListToolbar = () => {
  const { settings, onOpen, } = useToolbarSetting();
  const { isOpen, onClose, onOpen: onModalOpen } = useToggle();
  const { mutate, isLoading } = useDeleteManyProducts();
  const { t } = useTranslation('supplier');

  return (
    <>
      <TableToolbar
        selectActions={
          <Stack direction={'row'} spacing={1}>
            <PermissionCheck permissions={SUPPLIER_PERMISSIONS.SUPPLIER_WRITE}>
              <CommissionButton name={t('commission')} onModalOpen={onModalOpen}/>
              <DeleteButton isLoading={isLoading} onDelete={mutate} many />
            </PermissionCheck>
          </Stack>
        }
      >
        <TableToolbarActions settings={settings} />
      </TableToolbar>
      <GeneralActions>
        <PermissionCheck permissions={SUPPLIER_PERMISSIONS.SUPPLIER_WRITE}>
          <ExportButton />
          <AddButton action={onOpen} />
        </PermissionCheck>
      </GeneralActions>

      <CommissionModalActions open={isOpen} onClose={onClose} title={t('commissionModify')} />
    </>
  );
};

export default memo(SupplierListToolbar);
