import { memo, useCallback, useMemo } from 'react';
import { Stack } from '@mui/material';
import { AddButton, TableToolbar } from '@dfl/mui-admin-layout';
import { TableHeaderOptions } from 'components/libs/table';
import { useNavigate } from 'react-router';
import TableToolbarActions from 'components/libs/table/toolbar/TableToolbarActions';
import { COUPON_PERMISSIONS } from '../../constants/coupon.permissions';
import { GeneralActions } from 'layouts/portals';
import { PermissionCheck } from '@dfl/react-security';

const useToolbarSetting = () => {
  const navigate = useNavigate();

  const onCoupon = useCallback(() => {
    navigate('/sales/offers/settings/coupons/create');
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
    settings,
    onCoupon,
  };
};

const CouponListToolbar = () => {
  const { settings, onCoupon } = useToolbarSetting();

  return (
    <>
      <TableToolbar selectActions={<Stack direction={'row'} spacing={1}></Stack>}>
        <TableToolbarActions settings={settings} />
      </TableToolbar>

      <GeneralActions>
        <PermissionCheck permissions={COUPON_PERMISSIONS.COUPON_WRITE}>
          <AddButton action={onCoupon} />
        </PermissionCheck>
      </GeneralActions>
    </>
  );
};

export default memo(CouponListToolbar);
