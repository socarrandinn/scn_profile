import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { PagePaperLayout } from 'layouts/index';
import { FilterViewProvider, TableProvider } from '@dfl/mui-admin-layout';
import { productTabs } from 'modules/inventory/product/constants';
import { distributionCenterProductsFilters } from 'modules/inventory/warehouse/constants/warehouse-products.filters';
import DistributionCentersProductListContainer from '../../containers/ProductSections/DistributionCentersProductListContainer';

const DistributionCenterProductsList = () => {
  const { t } = useTranslation('product');

  return (
    <PagePaperLayout sx={{ mb: 3 }} title={t('list')}>
      <TableProvider id={'distribution-center-product'} filters={distributionCenterProductsFilters}>
        <FilterViewProvider views={productTabs}>
          <DistributionCentersProductListContainer />
        </FilterViewProvider>
      </TableProvider>
    </PagePaperLayout>
  );
};

export default memo(DistributionCenterProductsList);
