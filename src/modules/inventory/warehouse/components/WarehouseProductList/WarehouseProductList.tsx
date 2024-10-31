import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { PagePaperLayout } from 'layouts/index';
import { FilterViewProvider, TableProvider } from '@dfl/mui-admin-layout';
import StoreProductListContainer from 'modules/inventory/warehouse/containers/ProductSections/StoreProductListContainer';
import { productTabs } from 'modules/inventory/product/constants';
import { warehouseProductsFilters } from 'modules/inventory/warehouse/constants/warehouse-products.filters';

const WarehouseProductList = () => {
  const { t } = useTranslation('product');

  return (
    <PagePaperLayout sx={{ mb: 3 }} title={t('list')}>
      <TableProvider id={'warehouse-product'} filters={warehouseProductsFilters}>
        <FilterViewProvider views={productTabs}>
          <StoreProductListContainer />
        </FilterViewProvider>
      </TableProvider>
    </PagePaperLayout>
  );
};

export default memo(WarehouseProductList);
