import { memo } from 'react';
import { TableProvider } from '@dfl/mui-admin-layout';
import { PagePaperLayout } from 'layouts/index';
import { useTranslation } from 'react-i18next';
import StoreProviderSupplierListContainer from 'modules/inventory/store/containers/StoreProviderSupplierListContainer';
import { storeSupplierFilters } from 'modules/inventory/provider/supplier/constants';

const StoreProviderSupplierPage = () => {
  const { t } = useTranslation(['stores', 'supplier']);
  return (
    <PagePaperLayout title={t('supplier:list')}>
      <TableProvider id={'stores_provider_supplier'} filters={storeSupplierFilters}>
        <StoreProviderSupplierListContainer />
      </TableProvider>
    </PagePaperLayout>
  );
};

export default memo(StoreProviderSupplierPage);
