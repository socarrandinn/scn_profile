import { memo, useCallback, useMemo } from 'react';
import { Stack } from '@mui/material';
import { AddButton, TableToolbar } from '@dfl/mui-admin-layout';
import { TableHeaderOptions } from 'components/libs/table';
import TableToolbarActions from 'components/libs/table/toolbar/TableToolbarActions';
import { GeneralActions } from 'layouts/portals';
import { PermissionCheck } from '@dfl/react-security';
import { OFFER_PERMISSIONS } from '../../constants';
import { useNavigate } from 'react-router';

const useToolbarSetting = () => {
  const navigate = useNavigate();
  const onOffer = useCallback(() => {
    navigate('/sales/offers/settings/offer_orders/create');
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
    onOffer,
  };
};

const OfferListToolbar = () => {
  const { settings, onOffer } = useToolbarSetting();
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

        <GeneralActions>
          <PermissionCheck permissions={OFFER_PERMISSIONS.OFFER_WRITE}>
            <AddButton action={onOffer} />
          </PermissionCheck>
        </GeneralActions>
      </TableToolbar>
    </>
  );
};

export default memo(OfferListToolbar);
