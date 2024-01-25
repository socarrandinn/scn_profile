import { memo } from 'react';
import { Table } from '@dfl/mui-admin-layout';
import Box from '@mui/material/Box';
import { useFindClients } from 'modules/crm/clients/hooks/useFindClients';
import { clientsColumns } from 'modules/crm/clients/constants/clients.columns';
import { ClientsListToolbar } from 'modules/crm/clients/components/ClientsListToolbar';
import ClientsEditModal from 'modules/crm/clients/containers/ClientsEditModal';

const ClientsListContainer = () => {
  const { isLoading, error, data } = useFindClients();

  return (
    <Box>
      <ClientsListToolbar />
      <Table
        columns={clientsColumns}
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

export default memo(ClientsListContainer);
