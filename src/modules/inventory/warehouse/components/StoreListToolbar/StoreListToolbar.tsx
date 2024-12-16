import { memo, useCallback, useMemo } from 'react';
import { Stack } from '@mui/material';
import { TableToolbar, AddButton } from '@dfl/mui-admin-layout';
import { WAREHOUSE_PERMISSIONS } from 'modules/inventory/warehouse/constants/warehouse.permissions';
import { GeneralActions } from 'layouts/portals';
import { PermissionCheck } from '@dfl/react-security';
import { useNavigate } from 'react-router';
import { defaultWarehouseFilters, logisticSearchParam } from 'modules/inventory/warehouse/constants';
import { TableHeaderOptions } from 'components/libs/table';
import { getDefaultFilterKeys } from 'utils/custom-filters';
import TableToolbarActions from 'components/libs/table/toolbar/TableToolbarActions';
import DeleteButton from 'components/Actions/DeleteAction/DeleteButton';
import { useDeleteManyWarehouses } from '../../hooks/useDeleteManyWarehouses';
import { useTranslation } from 'react-i18next';
import ChangeManyStatusButton from 'components/Actions/VisibilityAction/ChangeManyStatusButton';
import { useVisibilityManyWarehouses } from '../../hooks/useVisibilityManyWarehouses';
import { PRODUCT_STATUS } from 'modules/inventory/product/constants/product_status';

type Props = {
  createPath?: string;
};

const useToolbarSetting = ({ createPath = 'create' }: Props) => {
  const navigate = useNavigate();
  const onOpen = useCallback(() => {
    navigate(createPath);
  }, [createPath, navigate]);
  const settings = useMemo<TableHeaderOptions>(() => {
    return {
      actions: {
        create: false,
        export: false,
      },
      filter: {
        activeMenu: true,
        defaultFilterKeys: getDefaultFilterKeys(defaultWarehouseFilters),
      },
    };
  }, []);

  return {
    onOpen,
    settings,
  };
};

type ToolbarProps = {
  logisticProviderId?: string;
};

const StoreListToolbar = ({ logisticProviderId }: ToolbarProps) => {
  const { t } = useTranslation(['product']);
  const { settings, onOpen } = useToolbarSetting({
    createPath: logisticProviderId ? `create?${logisticSearchParam}=${logisticProviderId}` : undefined,
  });

  const { isLoading, mutateAsync, reset } = useDeleteManyWarehouses();
  const {
    isLoading: isVisibilityLoading,
    mutateAsync: visibilityMutate,
    reset: visibilityReset,
  } = useVisibilityManyWarehouses();

  return (
    <>
      <TableToolbar
        selectActions={
          <PermissionCheck permissions={WAREHOUSE_PERMISSIONS.WAREHOUSE_WRITE}>
            <Stack direction={'row'} spacing={1}>
              <DeleteButton
                isLoading={isLoading}
                onDelete={mutateAsync}
                many
                customConfirmation={t('warehouse:confirm.deleteMany')}
                reset={reset}
              />
              <ChangeManyStatusButton
                isLoading={isVisibilityLoading}
                onChange={visibilityMutate}
                title={t('common:visibilityMany')}
                options={PRODUCT_STATUS?.map((s) => ({ ...s, title: t(s.title) }))}
                reset={visibilityReset}
                confirmation={t('warehouse:confirm.visibilityMany')}
              />
            </Stack>
          </PermissionCheck>

        }
      >
        <TableToolbarActions settings={settings} />
      </TableToolbar>
      <GeneralActions>
        <PermissionCheck permissions={WAREHOUSE_PERMISSIONS.WAREHOUSE_WRITE}>
          <AddButton action={onOpen} />
        </PermissionCheck>
      </GeneralActions>
    </>
  );
};

export default memo(StoreListToolbar);
