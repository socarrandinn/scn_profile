import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { PagePaperLayout } from 'layouts/index';
import { TableProvider } from '@dfl/mui-admin-layout';
import ClientsListContainer from 'modules/crm/clients/containers/ClientsListContainer';
import { clientsFilters } from 'modules/crm/clients/constants/clients.filters';

const ClientsList = () => {
  const { t } = useTranslation('clients');

  return (
    <PagePaperLayout title={t('list')}>
      <TableProvider id={'clients'} filters={clientsFilters}>
        <ClientsListContainer />
      </TableProvider>
    </PagePaperLayout>
  );
};

export default memo(ClientsList);
