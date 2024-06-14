import { AddButton, TableToolbar, TableToolbarActions } from '@dfl/mui-admin-layout';
import { PermissionCheck } from '@dfl/react-security';
import { Stack } from '@mui/material';
import { GeneralActions } from 'layouts/portals';
import { PRODUCT_DISCOUNT_PERMISSIONS } from 'modules/sales-offer/product-discount/constants/product-discount.permissions';
import { memo, useCallback } from 'react';
import { useNavigate } from 'react-router';

const useToolbarSetting = () => {
  const navigate = useNavigate();
  const handleAddAction = useCallback(() => {
    navigate('create');
  }, [navigate]);

  return {
    handleAddAction,
    settings: {
      actions: {
        create: false,
        export: false,
      },
    },
  };
};

const ProductDiscountListToolbar = () => {
  const { settings, handleAddAction } = useToolbarSetting();

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
        <PermissionCheck permissions={PRODUCT_DISCOUNT_PERMISSIONS.PRODUCT_DISCOUNT_WRITE}>
          <AddButton action={handleAddAction} />
        </PermissionCheck>
      </GeneralActions>
    </>
  );
};

export default memo(ProductDiscountListToolbar);
