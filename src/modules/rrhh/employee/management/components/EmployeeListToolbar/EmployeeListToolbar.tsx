import { memo, useCallback, useMemo } from 'react';
import { Stack } from '@mui/material';
import { TableToolbar, TableToolbarActions, TablaHeaderOptions, AddButton } from '@dfl/mui-admin-layout';
import { EMPLOYEE_PERMISSIONS } from 'modules/rrhh/employee/management/constants/employee.permissions';
import { GeneralActions } from 'layouts/portals';
import { PermissionCheck } from '@dfl/react-security';
import { useNavigate } from 'react-router';

const useToolbarSetting = () => {
  const navigate = useNavigate();
  const onOpen = useCallback(() => {
    navigate('create');
  }, [navigate]);

  const settings = useMemo<TablaHeaderOptions>(() => {
    return {
      actions: {
        create: false,
        export: false,
      },
    };
  }, []);

  return {
    onOpen,
    settings,
  };
};

const EmployeeListToolbar = () => {
  const { settings, onOpen } = useToolbarSetting();

  return (
    <>
      <TableToolbar
        selectActions={
          <Stack direction={'row'} spacing={1}>
            {/* <DeleteRowAction isLoading={isLoading} onDelete={mutate} /> */}
          </Stack>
        }
      >
        <TableToolbarActions settings={settings} />
      </TableToolbar>
      <GeneralActions>
        <PermissionCheck permissions={EMPLOYEE_PERMISSIONS.EMPLOYEE_WRITE}>
          <AddButton action={onOpen} />
        </PermissionCheck>
      </GeneralActions>
    </>
  );
};

export default memo(EmployeeListToolbar);
