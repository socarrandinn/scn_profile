import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { PagePaperLayout } from 'layouts/index';
import { FilterViewProvider, TableProvider } from '@dfl/mui-admin-layout';
import ClientsListContainer from 'modules/crm/clients/containers/ClientsListContainer';
import { clientsFilters } from 'modules/crm/clients/constants/clients.filters';
import { userViewTabs } from 'modules/security/users/constants/user.viewtabs';

const ClientsList = () => {
  const { t } = useTranslation('clients');

  return (
    <PagePaperLayout title={t('list')}>
      <TableProvider id={'clients'} filters={clientsFilters}>
        <FilterViewProvider views={userViewTabs}>
          <ClientsListContainer />
        </FilterViewProvider>
      </TableProvider>
    </PagePaperLayout>
  );
};

export default memo(ClientsList);
