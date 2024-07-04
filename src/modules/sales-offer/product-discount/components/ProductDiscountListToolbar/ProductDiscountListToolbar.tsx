import { memo, useCallback, useMemo } from 'react';
import { Stack } from '@mui/material';
import { useToggle } from '@dfl/hook-utils';
import { TableToolbar, TableToolbarActions, TablaHeaderOptions, AddButton } from '@dfl/mui-admin-layout';
import ProductDiscountCreateModal from 'modules/sales-offer/product-discount/containers/ProductDiscountCreateModal';
import { PRODUCT_DISCOUNT_PERMISSIONS } from 'modules/sales-offer/product-discount/constants/product-discount.permissions';
import { GeneralActions } from 'layouts/portals';
import { PermissionCheck } from '@dfl/react-security';
import { useNavigate } from 'react-router';

const useToolbarSetting = () => {
  const navigate = useNavigate();
  const { isOpen, onClose, onOpen } = useToggle(false);

  const settings = useMemo<TablaHeaderOptions>(() => {
    return {
      actions: {
        create: false,
        export: false,
      },
    };
  }, [onOpen]);

  return {
    isOpen,
    onOpen,
    onClose,
    settings,
  };
};

const ProductDiscountListToolbar = () => {
  const { isOpen, settings, onClose, onOpen } = useToolbarSetting();

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
          <AddButton action={onOpen} />
        </PermissionCheck>
      </GeneralActions>
      <ProductDiscountCreateModal open={isOpen} onClose={onClose} />
    </>
  );
};

export default memo(ProductDiscountListToolbar);
