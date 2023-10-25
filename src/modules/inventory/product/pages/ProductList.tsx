import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { PagePaperLayout } from 'layouts/index';
import { TableProvider, FilterViewProvider } from '@dfl/mui-admin-layout';
import ProductListContainer from 'modules/inventory/product/containers/ProductListContainer';
import { productFilters } from 'modules/inventory/product/constants/product.filters';
import { productTabs } from 'modules/inventory/product/constants';

const ProductList = () => {
  const { t } = useTranslation('product');

  return (
    <PagePaperLayout title={t('list')}>
      <TableProvider id={'product'} filters={productFilters}>
        <FilterViewProvider views={productTabs}>
          <ProductListContainer />
        </FilterViewProvider>
      </TableProvider>
    </PagePaperLayout>
  );
};

export default memo(ProductList);
