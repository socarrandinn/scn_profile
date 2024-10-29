import { memo } from 'react';
import { TableProvider } from '@dfl/mui-admin-layout';
import { PagePaperLayout } from 'layouts/index';
import { useTranslation } from 'react-i18next';
import StoreProviderSupplierListContainer from 'modules/inventory/warehouse/containers/StoreProviderSupplierListContainer';
import { warehouseSupplierFilters } from '../../constants';

const WarehouseProviderSupplierPage = () => {
  const { t } = useTranslation('supplier');
  return (
    <PagePaperLayout mb={3} title={t('list')}>
      <TableProvider id={'warehouse-supplier'} filters={warehouseSupplierFilters}>
        <StoreProviderSupplierListContainer />
      </TableProvider>
    </PagePaperLayout>
  );
};

export default memo(WarehouseProviderSupplierPage);
