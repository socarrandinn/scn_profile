import { memo, useCallback, useMemo } from 'react';
import { Stack } from '@mui/material';
import { PermissionCheck } from '@dfl/react-security';
import { TableToolbar, AddButton, ExportButton } from '@dfl/mui-admin-layout';
import { SUPPLIER_PERMISSIONS } from 'modules/inventory/provider/supplier/constants/supplier.permissions';
import { GeneralActions } from 'layouts/portals';
import { useNavigate } from 'react-router';
import { TableHeaderOptions } from 'components/libs/table';
import TableToolbarActions from 'components/libs/table/toolbar/TableToolbarActions';
import DeleteButton from 'components/Actions/DeleteAction/DeleteButton';
import ChangeManyStatusButton from 'components/Actions/VisibilityAction/ChangeManyStatusButton';
import { useDeleteManySupplier } from '../../hooks/useDeleteManySupplier';
import { PRODUCT_STATUS } from 'modules/inventory/product/constants/product_status';
import { useTranslation } from 'react-i18next';
import { useVisibilityManySupplier } from '../../hooks/useVisibilityManySupplier';

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
  const { t } = useTranslation(['product']);
  const { settings } = useToolbarSetting();
  const navigate = useNavigate();

  const { isLoading, mutateAsync, reset } = useDeleteManySupplier();
  const {
    isLoading: isVisibilityLoading,
    mutateAsync: visibilityMutate,
    reset: visibilityReset,
  } = useVisibilityManySupplier();

  const onCreateSupplier = useCallback(() => {
    navigate('/inventory/settings/suppliers/create');
  }, [navigate]);

  return (
    <>
      <TableToolbar
        selectActions={
          <Stack direction={'row'} spacing={1}>
            <DeleteButton
              isLoading={isLoading}
              onDelete={mutateAsync}
              many
              customConfirmation={t('supplier:confirm.deleteMany')}
              reset={reset}
            />
            <ChangeManyStatusButton
              isLoading={isVisibilityLoading}
              onChange={visibilityMutate}
              title={t('common:visibilityMany')}
              options={PRODUCT_STATUS?.map((s) => ({ ...s, title: t(s.title) }))}
              reset={visibilityReset}
            />
          </Stack>
        }
      >
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
