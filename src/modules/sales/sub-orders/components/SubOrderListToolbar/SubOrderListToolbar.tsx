import { memo, useMemo } from 'react';
import { Stack } from '@mui/material';
import { TableToolbar, useTableSelection } from '@dfl/mui-admin-layout';
import { GeneralActions } from 'layouts/portals';
import TableToolbarActions from 'components/libs/table/toolbar/TableToolbarActions';
import { TableHeaderOptions } from 'components/libs/table/toolbar/TableHeaderOptions';
import { getDefaultFilterKeys } from 'utils/custom-filters';
import { defaultSubOrderFilterKeys } from '../../constants/sub-order.filters';
import { PermissionCheck } from '@dfl/react-security';
import { DispatchOptionsSelector } from 'modules/sales/dispatch/components/DispatchDropDown';
import { DISPATCH_PERMISSIONS } from 'modules/sales/dispatch/constants';

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
const SubOrderListToolbar = (props: Props) => {
  const { settings } = useToolbarSetting();
  const { selected } = useTableSelection();
  return (
    <>
      <TableToolbar selectActions={<Stack direction={'row'} spacing={1}></Stack>}>
        <TableToolbarActions settings={settings} />
      </TableToolbar>
      <GeneralActions>
        <PermissionCheck permissions={[DISPATCH_PERMISSIONS.DISPATCH_WRITE]} atLessOne>
          <DispatchOptionsSelector total={props?.total} filters={props?.filters} selectedItems={selected} />
        </PermissionCheck>
      </GeneralActions>
    </>
  );
};

export default memo(SubOrderListToolbar);
