import { memo, useMemo } from 'react';
import { Stack } from '@mui/material';
import { useToggle } from '@dfl/hook-utils';
import { TableToolbar, AddButton } from '@dfl/mui-admin-layout';
import { GeneralActions } from 'layouts/portals';
import { PermissionCheck } from '@dfl/react-security';
import { TableHeaderOptions } from 'components/libs/table';
import TableToolbarActions from 'components/libs/table/toolbar/TableToolbarActions';
import { PRODUCT_FEATURE_PERMISSIONS } from '../../constants/product-feature.permissions';
import ProductFeatureCreateModal from '../../containers/ProductFeatureCreateModal';

const useToolbarSetting = () => {
  const { isOpen, onClose, onOpen } = useToggle(false);
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
    isOpen,
    onOpen,
    onClose,
    settings,
  };
};

const ProductFeatureListToolbar = () => {
  const { isOpen, settings, onClose, onOpen } = useToolbarSetting();

  return (
    <>
      <TableToolbar selectActions={<Stack direction={'row'} spacing={1}></Stack>}>
        <TableToolbarActions settings={settings} />
      </TableToolbar>
      <GeneralActions>
        <PermissionCheck permissions={PRODUCT_FEATURE_PERMISSIONS.WRITE}>
          <AddButton action={onOpen} />
        </PermissionCheck>
      </GeneralActions>
      <ProductFeatureCreateModal open={isOpen} onClose={onClose} />
    </>
  );
};

export default memo(ProductFeatureListToolbar);
