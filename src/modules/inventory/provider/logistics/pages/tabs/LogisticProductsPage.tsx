import { memo } from 'react';
import { PagePaperLayout } from 'layouts/index';
import { useTranslation } from 'react-i18next';
import { TableProvider } from '@dfl/mui-admin-layout';
import { supplierProductTabFilters } from 'modules/inventory/product/constants';
import LogisticProductListContainer from '../../containers/LogisticProductListContainer';

const LogisticProductsPage = () => {
  const { t } = useTranslation('product');
  return (
    <PagePaperLayout title={t('list')} sx={{ mt: 0 }}>
      <TableProvider id={'logistic-products'} filters={supplierProductTabFilters}>
        <LogisticProductListContainer />
      </TableProvider>
    </PagePaperLayout>
  );
};

export default memo(LogisticProductsPage);
