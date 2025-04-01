import { TableProvider } from '@dfl/mui-admin-layout';
import { PagePaperLayout } from 'layouts/index';
import { supplierWarehouseFilters } from 'modules/inventory/warehouse/constants';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import SupplierWarehouseListContainer from '../../containers/SupplierWarehouseListContainer';

const SupplierWarehouses = () => {
  const { t } = useTranslation('warehouse');
  
  return (
    <PagePaperLayout title={t('list')} mb={3}>
      <TableProvider id={'supplier-warehouses'} filters={supplierWarehouseFilters}>
        <SupplierWarehouseListContainer />
      </TableProvider>
    </PagePaperLayout>
  );
};

export default memo(SupplierWarehouses);
