import { memo, useMemo } from 'react';
import { Stack } from '@mui/material';
import { AddButton, TableToolbar } from '@dfl/mui-admin-layout';
import { GeneralActions } from 'layouts/portals';
import TableToolbarActions from 'components/libs/table/toolbar/TableToolbarActions';
import { TableHeaderOptions } from 'components/libs/table/toolbar/TableHeaderOptions';
import { defaultPaidOrderFilterKeys } from '../../constants';
import { getDefaultFilterKeys } from 'utils/custom-filters';
import { ORDER_PERMISSIONS } from 'modules/sales/common/constants/order-permissions';
import { PermissionCheck } from '@dfl/react-security';

const useToolbarSetting = () => {
  const settings = useMemo<TableHeaderOptions>(() => {
    return {
      actions: {
        create: false,
        export: false,
        menuFilter: false,
      },
      filter: {
        activeMenu: true,
        defaultFilterKeys: getDefaultFilterKeys(defaultPaidOrderFilterKeys),
      },
    };
  }, []);

  return {
    settings,
  };
};

type Props = {
  filters?: any;
};

const PaidOrderListToolbar = ({ filters = null }: Props) => {
  const { settings } = useToolbarSetting();

  const handleValidateAction = () => {
    console.log(filters);
  };

  return (
    <>
      <TableToolbar
        selectActions={
          <Stack direction={'row'} spacing={1}>
            <PermissionCheck permissions={ORDER_PERMISSIONS.ORDER_VALIDATE}>
              <AddButton title='sales:paidOrder.validate' action={() => handleValidateAction} />
            </PermissionCheck>
          </Stack>
        }
      >
        <TableToolbarActions settings={settings} />
      </TableToolbar>
      <GeneralActions></GeneralActions>
    </>
  );
};

export default memo(PaidOrderListToolbar);
