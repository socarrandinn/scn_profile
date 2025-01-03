import { memo } from 'react';
import { Table } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import { useFindRecipientsClients } from 'modules/crm/clients/hooks/useFindClients';
import { recipientsColumns } from 'modules/crm/clients/constants/clients.columns';
import { ClientsListToolbar } from 'modules/crm/clients/components/ClientsListToolbar';
import ClientsEditModal from 'modules/crm/clients/containers/ClientsEditModal';
import { UserTabsFilter } from 'modules/security/users/components/UserTabsFilter';
import { useClientDetails } from '../context/ClientDetailsContext';

const ClientsRecipientsListContainer = () => {
  const { clientId } = useClientDetails();
  const { isLoading, error, data } = useFindRecipientsClients(clientId as string);

  return (
    <Box>
      <UserTabsFilter />
      <ClientsListToolbar />
      <Table
        columns={recipientsColumns}
        data={data?.data}
        total={data?.total}
        isLoading={isLoading}
        error={error}
        select
      />
      <ClientsEditModal />
    </Box>
  );
};

export default memo(ClientsRecipientsListContainer);
