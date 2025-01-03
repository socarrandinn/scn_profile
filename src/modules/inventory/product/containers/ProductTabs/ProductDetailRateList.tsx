import { memo } from 'react';
import { TableProvider } from '@dfl/mui-admin-layout';
import { PagePaperLayout } from 'layouts/index';
import { useTranslation } from 'react-i18next';
import ProductRateListContainer from '../ProductRateListContainer';
import { rateFilters } from '../../constants/product-rate.filters';

const ProductDetailRateList = () => {
  const { t } = useTranslation('rate');
  return (
    <PagePaperLayout title={t('list')} mb={3}>
      <TableProvider id={'product-rate'} filters={rateFilters}>
        <ProductRateListContainer />
      </TableProvider>
    </PagePaperLayout>
  );
};

export default memo(ProductDetailRateList);
