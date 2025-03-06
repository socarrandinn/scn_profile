import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { PagePaperLayout } from 'layouts/index';
import { FilterViewProvider, TableProvider } from '@dfl/mui-admin-layout';
import DistributionCentersProductListContainer from 'modules/inventory/distribution-centers/containers/ProductSections/DistributionCentersProductListContainer';
import { productTabs } from 'modules/inventory/product/constants';
import { distributionCentersProductsFilters } from 'modules/inventory/distribution-centers/constants/distribution-centers-products.filters';
import { useParams } from 'react-router';
import { DistributioncentersContextProvider } from 'modules/inventory/provider/supplier/context/DistributionCentersProvider';

const DistributionCentersProductsList = () => {
  const { t } = useTranslation('product');
  const { id } = useParams();

  return (
    <DistributioncentersContextProvider distributionCenterId={id || ''}>
      <PagePaperLayout margin={0} title={t('list')}>
        <TableProvider id={'product'} filters={distributionCentersProductsFilters}>
          <FilterViewProvider views={productTabs}>
            <DistributionCentersProductListContainer />
          </FilterViewProvider>
        </TableProvider>
      </PagePaperLayout>
    </DistributioncentersContextProvider>
  );
};

export default memo(DistributionCentersProductsList);
