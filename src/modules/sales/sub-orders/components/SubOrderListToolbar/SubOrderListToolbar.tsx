import { memo, useMemo } from 'react';
import { Stack } from '@mui/material';
import { TableToolbar, useTableSelection } from '@dfl/mui-admin-layout';
import { GeneralActions } from 'layouts/portals';
import TableToolbarActions from 'components/libs/table/toolbar/TableToolbarActions';
import { TableHeaderOptions } from 'components/libs/table/toolbar/TableHeaderOptions';
import { getDefaultFilterKeys } from 'utils/custom-filters';
import { defaultSubOrderFilterKeys } from '../../constants/sub-order.filters';
import { PermissionCheck } from '@dfl/react-security';
import { DISPATCH_PERMISSIONS } from 'modules/sales/dispatch/constants';
import { PAYMENT_AGREEMENT_PERMISSIONS } from 'modules/sales/payment-agreement/constants';

import {
  DispatchOptionsSelector,
  PaymentAgreementOptionsSelector,
} from 'modules/sales/common/components/SubOrderDropDown';
import { ORDER_PERMISSIONS } from 'modules/sales/common/constants/order-permissions';
import { SubOrderStatusChange } from '../SubOrderStatusChange';

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
        <PermissionCheck permissions={[PAYMENT_AGREEMENT_PERMISSIONS.PAYMENT_AGREEMENT_WRITE]} atLessOne>
          <PaymentAgreementOptionsSelector total={props?.total} filters={props?.filters} selectedItems={selected} />
        </PermissionCheck>
        <PermissionCheck permissions={[DISPATCH_PERMISSIONS.DISPATCH_WRITE]} atLessOne>
          <DispatchOptionsSelector total={props?.total} filters={props?.filters} selectedItems={selected} />
        </PermissionCheck>
        <PermissionCheck permissions={[ORDER_PERMISSIONS.ORDER_WRITE]} atLessOne>
          <SubOrderStatusChange total={props?.total} filters={props?.filters} selectedItems={selected} />
          {/*    <SubOrderStatusImportAction /> */}
        </PermissionCheck>
      </GeneralActions>
    </>
  );
};

export default memo(SubOrderListToolbar);
