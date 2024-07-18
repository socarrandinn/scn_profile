import { memo, useMemo } from 'react';
import { Stack } from '@mui/material';
import { TablaHeaderOptions, TableToolbar, TableToolbarActions } from '@dfl/mui-admin-layout';

const useToolbarSetting = () => {
  const settings = useMemo<TablaHeaderOptions>(() => {
    return {
      actions: {
        create: true,
        createAction: '/sales/offers/settings/coupons/create',
        export: false,
      },
    };
  }, []);

  return {
    settings,
  };
};

const CouponListToolbar = () => {
  const { settings } = useToolbarSetting();

  return (
    <>
      <TableToolbar selectActions={<Stack direction={'row'} spacing={1}></Stack>}>
        <TableToolbarActions settings={settings} />
      </TableToolbar>
    </>
  );
};

export default memo(CouponListToolbar);
