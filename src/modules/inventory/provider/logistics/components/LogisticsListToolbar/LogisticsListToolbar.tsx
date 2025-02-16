import { memo, useCallback, useMemo } from 'react';
import { Stack } from '@mui/material';
import { TableToolbar, AddButton } from '@dfl/mui-admin-layout';
import { LOGISTICS_PERMISSIONS } from 'modules/inventory/provider/logistics/constants/logistics.permissions';
import { GeneralActions } from 'layouts/portals';
import { PermissionCheck } from '@dfl/react-security';
import { useNavigate } from 'react-router';
import { TableHeaderOptions } from 'components/libs/table';
import TableToolbarActions from 'components/libs/table/toolbar/TableToolbarActions';
import DeleteButton from 'components/Actions/DeleteAction/DeleteButton';
import { useTranslation } from 'react-i18next';
import { useDeleteManyLogistics } from '../../hooks/useDeleteManyLogistics';

const useToolbarSetting = () => {
  const navigate = useNavigate();
  const onOpen = useCallback(() => {
    navigate('create');
  }, [navigate]);
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
    onOpen,
    settings,
  };
};

const LogisticsListToolbar = () => {
  const { settings, onOpen } = useToolbarSetting();
  const { t } = useTranslation(['product']);
  const { isLoading, mutateAsync, reset } = useDeleteManyLogistics();
  // const visibility = useVisibilityManyLogistic();

  return (
    <>
      <TableToolbar
        selectActions={
          <PermissionCheck permissions={LOGISTICS_PERMISSIONS.LOGISTICS_WRITE}>
            <Stack direction={'row'} spacing={1}>
              <DeleteButton
                isLoading={isLoading}
                onDelete={mutateAsync}
                many
                customConfirmation={t('logistics:confirm.deleteMany')}
                reset={reset}
              />
              {/* <ChangeManyStatusButton
              isLoading={visibility.isLoading}
              onChange={visibility.mutateAsync}
              title={t('common:visibilityMany')}
              options={VISIBILITY_STATUS?.map((s) => ({ ...s, title: t(s.title) }))}
              reset={visibility.reset}
            /> */}
            </Stack>
          </PermissionCheck>
        }
      >
        <TableToolbarActions settings={settings} />
      </TableToolbar>
      <GeneralActions>
        <PermissionCheck permissions={LOGISTICS_PERMISSIONS.LOGISTICS_WRITE}>
          <AddButton action={onOpen} />
        </PermissionCheck>
      </GeneralActions>
    </>
  );
};

export default memo(LogisticsListToolbar);
