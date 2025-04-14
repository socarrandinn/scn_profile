import { memo, useMemo } from 'react';
import { Stack } from '@mui/material';
import { TableToolbar, useTableSelection } from '@dfl/mui-admin-layout';
import { GeneralActions } from 'layouts/portals';
import TableToolbarActions from 'components/libs/table/toolbar/TableToolbarActions';
import { TableHeaderOptions } from 'components/libs/table/toolbar/TableHeaderOptions';
import { getDefaultFilterKeys } from 'utils/custom-filters';
import { defaultSubOrderFilterKeys } from 'modules/sales/sub-orders/constants/sub-order.filters';
import { PermissionCheck } from '@dfl/react-security';
import { ORDER_PERMISSIONS } from 'modules/sales/common/constants/order-permissions';
import { SubOrderStatusChange } from 'modules/sales/sub-orders/components/SubOrderStatusChange';
import SubOrderStatusImportAction from 'modules/sales/sub-orders/components/SubOrderListToolbar/SubOrderStatusImportAction';

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
        defaultFilterKeys: getDefaultFilterKeys(defaultSubOrderFilterKeys),
      },
    };
  }, []);

  return {
    settings,
  };
};

type Props = {
  filters: any;
  search: string;
  total: number;
};
const DispatchSubOrderListToolbar = (props: Props) => {
  const { settings } = useToolbarSetting();
  const { selected } = useTableSelection();

  return (
    <>
      <TableToolbar selectActions={<Stack direction={'row'} spacing={1}></Stack>}>
        <TableToolbarActions settings={settings} />
      </TableToolbar>
      <GeneralActions>
        <PermissionCheck permissions={[ORDER_PERMISSIONS.ORDER_WRITE]} atLessOne>
          <SubOrderStatusChange total={props?.total} filters={props?.filters} selectedItems={selected} />
          <SubOrderStatusImportAction />
        </PermissionCheck>
      </GeneralActions>
    </>
  );
};

export default memo(DispatchSubOrderListToolbar);
