import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { PagePaperLayout } from 'layouts/index';
import { TableProvider, FilterViewProvider } from '@dfl/mui-admin-layout';
import StoreProductListContainer from 'modules/inventory/store/containers/ProductSections/StoreProductListContainer';
import { productTabs } from 'modules/inventory/product/constants';
import { storeProductsFilters } from 'modules/inventory/store/constants/storeProducts.filters';

const StoreProductsListComponent = () => {
  const { t } = useTranslation('products');

  return (
    <PagePaperLayout title={t('list')}>
      <TableProvider id={'product'} filters={storeProductsFilters}>
        <FilterViewProvider views={productTabs}>
          <StoreProductListContainer />
        </FilterViewProvider>
      </TableProvider>
    </PagePaperLayout>
  );
};

export default memo(StoreProductsListComponent);
