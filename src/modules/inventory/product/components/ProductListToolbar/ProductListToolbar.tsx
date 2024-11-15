import { memo, useCallback } from 'react';
import { Stack } from '@mui/material';
import { TableToolbar, AddButton, ImportButton, useTableSelection } from '@dfl/mui-admin-layout';
import { PRODUCT_PERMISSIONS } from 'modules/inventory/product/constants/product.permissions';
import { GeneralActions } from 'layouts/portals';
import { PermissionCheck } from '@dfl/react-security';
import { useNavigate } from 'react-router';
import { ProductExportButton } from '../ProductExportButton';
import { AddProductsToOfferSelector } from '../AddProductsToOfferSelector';
import { useToggle } from '@dfl/hook-utils';
import ModalImportProduct from 'modules/inventory/product-upload/components/ImportProduct/ModalImportProduct';
import { defaultProductFilters } from '../../constants';
import { getDefaultFilterKeys } from 'utils/custom-filters';
import { TableHeaderOptions } from 'components/libs/table/toolbar/TableHeaderOptions';
import TableToolbarActions from 'components/libs/table/toolbar/TableToolbarActions';
import { useDeleteManyProducts } from '../../hooks/useDeleteManyProducts';
import DeleteButton from 'components/Actions/DeleteAction/DeleteButton';
import { useTranslation } from 'react-i18next';
import ChangeManyStatusButton from 'components/Actions/VisibilityAction/ChangeManyStatusButton';
import { useVisibilityManyProducts } from '../../hooks/useVisibilityManyProducts';
import { PRODUCT_STATUS } from '../../constants/product_status';
import { useScoreManyProducts } from '../../hooks/useScoreManyProducts';
import ScoreButton from 'components/Actions/ScoreAction/ScoreButton';

const defaultSettings: TableHeaderOptions = {
  actions: {
    create: false,
    export: false,
  },
  filter: {
    defaultFilterKeys: getDefaultFilterKeys(defaultProductFilters),
    activeMenu: true,
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
  const { t } = useTranslation(['product']);
  const { settings, handleAddAction } = useToolbarSetting();
  const { selected } = useTableSelection();
  const { isOpen, onOpen, onClose } = useToggle(false);
  const { isLoading, mutateAsync, reset } = useDeleteManyProducts();
  const {
    isLoading: isVisibilityLoading,
    mutateAsync: visibilityMutateAsync,
    reset: resetVisibility,
  } = useVisibilityManyProducts();

  const score = useScoreManyProducts();
  return (
    <>
      <TableToolbar
        selectActions={
          <Stack direction={'row'} spacing={1}>
            <DeleteButton
              isLoading={isLoading}
              reset={reset}
              onDelete={mutateAsync}
              many
              customConfirmation={t('product:confirm.deleteMany')}
            />
            <ChangeManyStatusButton
              isLoading={isVisibilityLoading}
              onChange={visibilityMutateAsync}
              title={t('common:visibilityMany')}
              options={PRODUCT_STATUS?.map((s) => ({ ...s, title: t(s.title) }))}
              reset={resetVisibility}
            />
            <ScoreButton
              isLoading={score.isLoading}
              reset={score.reset}
              onChange={score.mutateAsync}
              many
              customConfirmation={t('product:confirm.deleteMany')}
            />
          </Stack>
        }
      >
        <TableToolbarActions settings={settings} />
      </TableToolbar>
      <GeneralActions>
        <PermissionCheck permissions={PRODUCT_PERMISSIONS.PRODUCT_WRITE}>
          <ImportButton onClick={onOpen} disabled />
          <ProductExportButton />
          <PermissionCheck permissions={'BULK_PRODUCT_DISCOUNT:WRITE'}>
            <AddProductsToOfferSelector selectedItems={selected} total={total} filters={filters} search={search} />
          </PermissionCheck>
          <AddButton action={handleAddAction} />
        </PermissionCheck>
      </GeneralActions>

      <ModalImportProduct isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default memo(ProductListToolbar);
