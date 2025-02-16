import { memo, useCallback } from 'react';
import { Stack } from '@mui/material';
import { TableToolbar, AddButton, useTableSelection, ImportButton } from '@dfl/mui-admin-layout';
import { PRODUCT_OFFER_PERMISSIONS, PRODUCT_PERMISSIONS } from 'modules/inventory/product/constants/product.permissions';
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
import { useScoreManyProducts } from '../../hooks/useScoreManyProducts';
import ScoreButton from 'components/Actions/ScoreAction/ScoreButton';
import { ProductExportButton } from 'modules/export/components/modules/inventory/ProductExportButton';
import { VISIBILITY_STATUS } from 'modules/inventory/common/constants/visibility-status';

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
  const { isOpen, onClose, onOpen } = useToggle(false);
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

              <PermissionCheck permissions={[PRODUCT_OFFER_PERMISSIONS.WRITE]}>
                <AddProductsToOfferSelector selectedItems={selected} total={total} filters={filters} search={search} />
              </PermissionCheck>
              <ChangeManyStatusButton
                isLoading={visibility.isLoading}
                onChange={visibility.mutateAsync}
                title={t('common:visibilityMany')}
                options={VISIBILITY_STATUS?.map((s) => ({ ...s, title: t(s.title) }))}
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

      <GeneralActions>
        <PermissionCheck permissions={PRODUCT_PERMISSIONS.PRODUCT_VIEW}>
          <ProductExportButton {...props} />
        </PermissionCheck>
        <PermissionCheck permissions={PRODUCT_PERMISSIONS.PRODUCT_WRITE}>
          <ImportButton onClick={onOpen} />
          <AddButton action={handleAddAction} />
        </PermissionCheck>
      </GeneralActions>
      <ModalImportProduct isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default memo(ProductListToolbar);
