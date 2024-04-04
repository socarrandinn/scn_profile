import { memo } from 'react';
import { TableProvider } from '@dfl/mui-admin-layout';
import StoreListContainer from 'modules/inventory/store/containers/StoreListContainer';
import { PagePaperLayout } from 'layouts/index';
import { useTranslation } from 'react-i18next';
import { logisticProviderStoreFilters } from 'modules/inventory/store/constants/logistic-provider-stores.filters';
import { useParams } from 'react-router';

const LogisticStoresContainer = () => {
  const { t } = useTranslation('logistics');

  const params = useParams();

  return (
    <PagePaperLayout title={t('stores')}>
      <TableProvider id={'stores'} filters={logisticProviderStoreFilters}>
        <StoreListContainer logisticProviderId={params?.id}/>
      </TableProvider>
    </PagePaperLayout>
  )
};

export default memo(LogisticStoresContainer);
