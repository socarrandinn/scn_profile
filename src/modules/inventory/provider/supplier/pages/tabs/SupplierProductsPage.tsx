import { memo } from 'react';
import { PagePaperLayout } from 'layouts/index';
import { useTranslation } from 'react-i18next';
import { TableProvider } from '@dfl/mui-admin-layout';
import SupplierProductListContainer from '../../containers/SupplierProductListContainer';
import { supplierProductTabFilters } from 'modules/inventory/product/constants';

const SupplierProductsPage = () => {
  const { t } = useTranslation('product');
  return (
    <PagePaperLayout title={t('list')} mb={3}>
      <TableProvider id={'supplier-products'} filters={supplierProductTabFilters}>
        <SupplierProductListContainer />
      </TableProvider>
    </PagePaperLayout>
  );
};

export default memo(SupplierProductsPage);
