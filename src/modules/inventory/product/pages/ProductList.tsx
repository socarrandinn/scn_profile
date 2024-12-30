import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { PagePaperLayout } from 'layouts/index';
import { TableProvider, FilterViewProvider } from '@dfl/mui-admin-layout';
import ProductListContainer from 'modules/inventory/product/containers/ProductListContainer';
import { productFilters } from 'modules/inventory/product/constants/product.filters';
import { PRODUCT_PERMISSIONS, productTabs } from 'modules/inventory/product/constants';
import { useSecurity } from '@dfl/react-security';
import { ConditionContainer } from '@dfl/mui-react-common';
import { DashboardNoPermission } from 'components/DashboardNoPermission';

const ProductList = () => {
  const { t } = useTranslation('product');
  const { hasPermission } = useSecurity();

  const filters = useMemo(() => {
    const productFiltersWithoutPrice = productFilters.filter(
      (filter) => filter?.key !== 'price' && filter?.key !== 'cost',
    );
    return !hasPermission(PRODUCT_PERMISSIONS.PRODUCT_PRICE) ? productFiltersWithoutPrice : productFilters;
  }, [hasPermission]);

  return (
    <ConditionContainer
      active={hasPermission(PRODUCT_PERMISSIONS.PRODUCT_VIEW)}
      alternative={<DashboardNoPermission description='notAllowed.productDescription' />}
    >
      <PagePaperLayout title={t('list')} mb={3}>
        <TableProvider id={'product'} filters={filters}>
          <FilterViewProvider views={productTabs}>
            <ProductListContainer />
          </FilterViewProvider>
        </TableProvider>
      </PagePaperLayout>
    </ConditionContainer>
  );
};

export default memo(ProductList);
