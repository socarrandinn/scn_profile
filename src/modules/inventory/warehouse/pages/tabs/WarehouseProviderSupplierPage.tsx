import { memo } from 'react';
import { TableProvider } from '@dfl/mui-admin-layout';
import { PagePaperLayout } from 'layouts/index';
import { useTranslation } from 'react-i18next';
import StoreProviderSupplierListContainer from 'modules/inventory/warehouse/containers/StoreProviderSupplierListContainer';
import { storeSupplierFilters } from 'modules/inventory/provider/supplier/constants';

const WarehouseProviderSupplierPage = () => {
  const { t } = useTranslation('supplier');
  return (
    <PagePaperLayout margin={0} title={t('list')}>
      <TableProvider id={'warehouse-provider-supplier'} filters={storeSupplierFilters}>
        <StoreProviderSupplierListContainer />
      </TableProvider>
    </PagePaperLayout>
  );
};

export default memo(WarehouseProviderSupplierPage);
