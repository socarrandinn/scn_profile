import React, { memo } from 'react';
import ClientRecipientsListContainer from 'modules/crm/clients/containers/ClientRecipientsListContainer';
import { PagePaperLayout } from 'layouts/index';
import { FilterViewProvider, TableProvider } from '@dfl/mui-admin-layout';
import { userViewTabs } from 'modules/security/users/constants/user.viewtabs';
import { clientsFilters } from '../../constants';
import { useTranslation } from 'react-i18next';

const ClientRecipientsPage = () => {
  const { t } = useTranslation('clients');

  return (
    <PagePaperLayout title={t('tabs.recipients')} mt={0}>
      <TableProvider id={'clients'} filters={clientsFilters}>
        <FilterViewProvider views={userViewTabs}>
          <ClientRecipientsListContainer />
        </FilterViewProvider>
      </TableProvider>
    </PagePaperLayout>
  );
};

export default memo(ClientRecipientsPage);
