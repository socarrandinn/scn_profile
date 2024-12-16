import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { PagePaperLayout } from 'layouts/index';
import { FilterViewProvider, TableProvider } from '@dfl/mui-admin-layout';
import { PRODUCT_PERMISSIONS, productTabs } from 'modules/inventory/product/constants';
import { distributionCenterProductsFilters } from 'modules/inventory/warehouse/constants/warehouse-products.filters';
import DistributionCentersProductListContainer from '../../containers/ProductSections/DistributionCentersProductListContainer';
import { useSecurity } from '@dfl/react-security';
import { filter } from 'lodash';

const DistributionCenterProductsList = () => {
  const { t } = useTranslation('product');
  const { hasPermission } = useSecurity();

  const filters = useMemo(() => {
    const distributionCenterFiltersWithoutPrice = distributionCenterProductsFilters.filter(
      (filter) => filter?.key !== 'price' && filter?.key !== 'cost'
    );
    return !hasPermission(PRODUCT_PERMISSIONS.PRODUCT_PRICE) ? distributionCenterFiltersWithoutPrice : distributionCenterProductsFilters
  }, [hasPermission]);

  return (
    <PagePaperLayout sx={{ mb: 3 }} title={t('list')}>
      <TableProvider id={'distribution-center-product'} filters={filters}>
        <FilterViewProvider views={productTabs}>
          <DistributionCentersProductListContainer />
        </FilterViewProvider>
      </TableProvider>
    </PagePaperLayout>
  );
};

export default memo(DistributionCenterProductsList);
