import { memo, useMemo } from 'react';
import { Stack } from '@mui/material';
import { TablaHeaderOptions, TableToolbar, TableToolbarActions } from '@dfl/mui-admin-layout';

const useToolbarSetting = () => {
  const settings = useMemo<TablaHeaderOptions>(() => {
    return {
      actions: {
        create: true,
        createAction: '/sales/offers/settings/offer_orders/create',
        export: false,
      },
    };
  }, []);

  return {
    settings,
  };
};

const OfferListToolbar = () => {
  const { settings } = useToolbarSetting();
  // const { mutate, isLoading } = useDeleteManyOffers();

  return (
    <>
      <TableToolbar
        selectActions={
          <Stack direction={'row'} spacing={1}>
          {/*   <DeleteButton isLoading={isLoading} onDelete={mutate} many /> */}
          </Stack>
        }
      >
        <TableToolbarActions settings={settings} />
      </TableToolbar>
    </>
  );
};

export default memo(OfferListToolbar);
