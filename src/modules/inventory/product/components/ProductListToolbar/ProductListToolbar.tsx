import { memo, useCallback } from 'react';
import { Stack } from '@mui/material';
import {
  TableToolbar,
  TableToolbarActions,
  TablaHeaderOptions,
  AddButton,
  ImportButton,
  useTableSelection,
} from '@dfl/mui-admin-layout';
import { PRODUCT_PERMISSIONS } from 'modules/inventory/product/constants/product.permissions';
import { GeneralActions } from 'layouts/portals';
import { PermissionCheck } from '@dfl/react-security';
import { useNavigate } from 'react-router';
import { ProductExportButton } from '../ProductExportButton';
import { AddProductsToOfferSelector } from '../AddProductsToOfferSelector';
import { useToggle } from '@dfl/hook-utils';
import ModalImportProduct from 'modules/inventory/product-upload/components/ImportProduct/ModalImportProduct';

const defaultSettings: TablaHeaderOptions = {
  actions: {
    create: false,
    export: false,
  },
};
const useToolbarSetting = () => {
  const navigate = useNavigate();
  const handleAddAction = useCallback(() => {
    navigate('create');
  }, [navigate]);

  return {
    handleAddAction,
    settings: defaultSettings,
  };
};

type ProductListToolbarProps = {
  search?: any;
  filters: any;
  total: number | undefined;
};

const ProductListToolbar = ({ search, filters, total }: ProductListToolbarProps) => {
  const { settings, handleAddAction } = useToolbarSetting();
  const { selected } = useTableSelection();
  const { isOpen, onOpen, onClose } = useToggle(false);

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
        <PermissionCheck permissions={'BULK_PRODUCT_DISCOUNT:WRITE'}>
          <AddProductsToOfferSelector selectedItems={selected} total={total} filters={filters} search={search} />
        </PermissionCheck>
        <PermissionCheck permissions={PRODUCT_PERMISSIONS.PRODUCT_WRITE}>
          <ImportButton onClick={onOpen} />
          <ProductExportButton />
          <AddButton action={handleAddAction} />
        </PermissionCheck>
      </GeneralActions>

      <ModalImportProduct isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default memo(ProductListToolbar);
