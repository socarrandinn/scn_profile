import { memo, useCallback } from 'react';
import { Stack } from '@mui/material';
import { TableToolbar, AddButton, ImportButton, useTableSelection } from '@dfl/mui-admin-layout';
import { PRODUCT_PERMISSIONS } from 'modules/inventory/product/constants/product.permissions';
import { GeneralActions } from 'layouts/portals';
import { PermissionCheck } from '@dfl/react-security';
import { useNavigate } from 'react-router';
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
import { ProductExportButton } from 'modules/export/components/modules/inventory/ProductExportButton';

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

const ProductListToolbar = ({ ...props }: ProductListToolbarProps) => {
  const { filters, total, search } = props;
  const { t } = useTranslation(['product']);
  const { settings, handleAddAction } = useToolbarSetting();
  const { selected } = useTableSelection();
  const { isOpen, onOpen, onClose } = useToggle(false);
  const { isLoading, mutateAsync, reset } = useDeleteManyProducts();
  const visibility = useVisibilityManyProducts();
  const score = useScoreManyProducts();
  return (
    <>
      <TableToolbar
        selectActions={
          <PermissionCheck permissions={PRODUCT_PERMISSIONS.PRODUCT_WRITE}>
            <Stack
              direction={'row'}
              gap={1}
              justifyContent={{ xs: 'end', md: 'start' }}
              flexWrap={{ xs: 'wrap', md: 'nowrap' }}
            >
              <AddProductsToOfferSelector selectedItems={selected} total={total} filters={filters} search={search} />
              <ChangeManyStatusButton
                isLoading={visibility.isLoading}
                onChange={visibility.mutateAsync}
                title={t('common:visibilityMany')}
                options={PRODUCT_STATUS?.map((s) => ({ ...s, title: t(s.title) }))}
                reset={visibility.reset}
                confirmation={t('product:confirm.visibilityMany')}
              />
              <ScoreButton isLoading={score.isLoading} reset={score.reset} onChange={score.mutateAsync} />
              <DeleteButton
                isLoading={isLoading}
                reset={reset}
                onDelete={mutateAsync}
                many
                customConfirmation={t('product:confirm.deleteMany')}
              />
            </Stack>
          </PermissionCheck>
        }
      >
        <TableToolbarActions settings={settings} />
      </TableToolbar>
      <PermissionCheck permissions={PRODUCT_PERMISSIONS.PRODUCT_WRITE}>
        <GeneralActions>
          <ImportButton onClick={onOpen} />
          <ProductExportButton {...props} />
          <AddButton action={handleAddAction} />
        </GeneralActions>
      </PermissionCheck>
      <ModalImportProduct isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default memo(ProductListToolbar);
