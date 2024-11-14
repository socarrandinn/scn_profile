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
import DeleteButton from 'components/DeleteAction/DeleteButton';
import { useDeleteManyWarehouses } from '../../hooks/useDeleteManyWarehouses';
import { useTranslation } from 'react-i18next';

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
  const { settings, onOpen } = useToolbarSetting({
    createPath: logisticProviderId ? `create?${logisticSearchParam}=${logisticProviderId}` : undefined,
  });
  const { t } = useTranslation('dialog');

  const { isLoading, mutate } = useDeleteManyWarehouses();

  return (
    <>
      <TableToolbar
        selectActions={
          <Stack direction={'row'} spacing={1}>
            <DeleteButton isLoading={isLoading} onDelete={mutate} many customConfirmation={t('warehouse.deleteMany')} />
          </Stack>
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
