import { memo, useMemo } from 'react';
import { Stack, Typography } from '@mui/material';
import { FlexBox } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import { useToggle } from '@dfl/hook-utils';
import { useProductDetail } from 'modules/inventory/product/contexts/ProductDetail';
import { STOCK_OPERATIONS } from 'modules/inventory/product-stock/constants/stock-operations.constants';
import ProductWarehouseStockCreateModal from 'modules/inventory/product-stock/containers/ProductWarehouseStockCreateModal';
import { IProduct } from '../../interfaces/IProduct';
import ProductUpdateStockForm from 'modules/inventory/product-stock/components/UpdateStocksForm/ProductUpdateStockForm';
import { TransTypography } from 'components/TransTypography';
import { AddButton, TableToolbar } from '@dfl/mui-admin-layout';
import { PermissionCheck } from '@dfl/react-security';
import { STOCK_PERMISSIONS } from 'modules/inventory/product-stock/constants/stock.permissions';
import ButtonRefresh from 'modules/inventory/common/components/ButtonRefresh/ButtonRefresh';
import { PRODUCTS_WAREHOUSE_STOCK } from '../../constants/query-keys';
import { IStockResume } from 'modules/inventory/product-stock/interfaces/IStock';
import { useVisibilityManyProductsStock } from 'modules/inventory/warehouse/hooks/useVisibilityManyProductsStock';
import ChangeManyStatusButton from 'components/Actions/VisibilityAction/ChangeManyStatusButton';
import { PRODUCT_PERMISSIONS } from '../../constants';
import { GeneralActions } from 'layouts/PageLayouts/PagePaperLayout';
import { TableHeaderOptions } from 'components/libs/table';
import { VISIBILITY_STATUS } from 'modules/inventory/common/constants/visibility-status';
import TableToolbarActions from 'components/libs/table/toolbar/TableToolbarActions';

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

type Props = {
  stockResume: IStockResume;
};

const ProductInventoryListToolbar = ({ stockResume }: Props) => {
  const { t } = useTranslation('product');
  const { settings } = useToolbarSetting();
  const { isOpen, onClose, onOpen } = useToggle();
  const { product } = useProductDetail();
  const visibility = useVisibilityManyProductsStock(product?._id as string);

  return (
    <>
      <Typography variant='subtitle2'>{t('section.inventory.title')}</Typography>

      <GeneralActions>
        <FlexBox
          my={1}
          sx={{ width: '100%' }}
          flexDirection={'row'}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <Typography variant='subtitle2'>
            {t('section.inventory.total')}: {stockResume?.available}
          </Typography>

          <PermissionCheck permissions={STOCK_PERMISSIONS.WRITE}>
            <div className='flex gap-4'>
              <ButtonRefresh queryKey={[[PRODUCTS_WAREHOUSE_STOCK]]} />
              <AddButton action={onOpen} variant='contained'>
                {t('section.inventory.add')}
              </AddButton>
            </div>
          </PermissionCheck>
        </FlexBox>
      </GeneralActions>

      <TableToolbar
        selectActions={
          <PermissionCheck permissions={PRODUCT_PERMISSIONS.PRODUCT_WRITE || STOCK_PERMISSIONS.WRITE}>
            <Stack
              direction={'row'}
              gap={1}
              justifyContent={{ xs: 'end', md: 'start' }}
              flexWrap={{ xs: 'wrap', md: 'nowrap' }}
            >
              <ChangeManyStatusButton
                isLoading={visibility.isLoading}
                onChange={visibility.mutateAsync}
                title={t('common:visibilityMany')}
                options={VISIBILITY_STATUS?.map((s) => ({ ...s, title: t(s.title) }))}
                reset={visibility.reset}
                confirmation={t('product:confirm.visibilityStockMany')}
              />
            </Stack>
          </PermissionCheck>
        }
      >
        <TableToolbarActions settings={settings} />
      </TableToolbar>

      <ProductWarehouseStockCreateModal
        title={<TransTypography message={'product:stock.title'} values={{ name: product?.name }} />}
        open={isOpen}
        onClose={onClose}
        Form={ProductUpdateStockForm}
        initValue={{
          warehouse: null,
          note: '',
          operation: STOCK_OPERATIONS.ADDED,
          quantity: 1,
          item: product as IProduct,
        }}
      />
    </>
  );
};

export default memo(ProductInventoryListToolbar);
