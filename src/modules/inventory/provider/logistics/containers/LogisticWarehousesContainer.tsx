import { memo } from 'react';
import { TableProvider } from '@dfl/mui-admin-layout';
import StoreListContainer from 'modules/inventory/warehouse/containers/StoreListContainer';
import { PagePaperLayout } from 'layouts/index';
import { useTranslation } from 'react-i18next';
import { warehouseLogisticProviderFilters } from 'modules/inventory/warehouse/constants/warehouse-logistic-provider.filters';
import { useParams } from 'react-router';

const LogisticStoresContainer = () => {
  const { t } = useTranslation('logistics');

  const params = useParams();

  return (
    <PagePaperLayout mt={0} title={t('warehouses')}>
      <TableProvider id={'warehouses'} filters={warehouseLogisticProviderFilters}>
        <StoreListContainer logisticProviderId={params?.id}/>
      </TableProvider>
    </PagePaperLayout>
  )
};

export default memo(LogisticStoresContainer);
