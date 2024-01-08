import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { PagePaperLayout } from 'layouts/index';
import { TableProvider } from '@dfl/mui-admin-layout';
import ProductsListContainer from 'modules/inventory/provider/supplier/containers/SupplierListContainer';
import { supplierFilters } from 'modules/inventory/provider/supplier/constants/supplier.filters';

const SupplierList = () => {
  const { t } = useTranslation('supplier');

  return (
    <PagePaperLayout title={t('list')}>
      <TableProvider id={'supplier'} filters={supplierFilters}>
        <ProductsListContainer />
      </TableProvider>
    </PagePaperLayout>
  );
};

export default memo(SupplierList);
