import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { PagePaperLayout } from 'layouts/index';
import { TableProvider, FilterViewProvider } from '@dfl/mui-admin-layout';
import ProductListContainer from 'modules/inventory/product/containers/ProductListContainer';
import { productFilters } from 'modules/inventory/product/constants/product.filters';
import { PRODUCT_PERMISSIONS, productTabs } from 'modules/inventory/product/constants';
import { useSecurity } from '@dfl/react-security';

const ProductList = () => {
  const { t } = useTranslation('product');
  const { hasPermission } = useSecurity();

  const filters = useMemo(() => {
    const productFiltersWithoutPrice = productFilters.filter(
      (filter) => filter?.key !== 'price' && filter?.key !== 'cost'
    );
    return !hasPermission(PRODUCT_PERMISSIONS.PRODUCT_PRICE) ? productFiltersWithoutPrice : productFilters
  }, [hasPermission]);

  return (
    <PagePaperLayout title={t('list')}>
      <TableProvider id={'product'} filters={filters}>
        <FilterViewProvider views={productTabs}>
          <ProductListContainer />
        </FilterViewProvider>
      </TableProvider>
    </PagePaperLayout>
  );
};

export default memo(ProductList);
