import { memo } from 'react';
import { HeaderSummaryTabs } from 'modules/inventory/provider/common/components/HeaderSummaryTabs';
import { Box } from '@mui/material';
import { RouterTab } from '@dfl/react-security';
import HeaderSummaryTabsSkeleton from 'modules/inventory/provider/common/components/HeaderSummaryTabs/HeaderSummaryTabsSkeleton';
import { useClientDetails } from 'modules/crm/clients/context/ClientDetailsContext';
import { clientTabs } from 'modules/crm/clients/constants/client.tabs';
import { ClientDeleteButton, ClientEditButton } from 'modules/crm/clients/components/ClientActions';

const ClientHeaderDetails = () => {
  const { isLoading, error, client, clientId } = useClientDetails();

  if (isLoading || error) return <HeaderSummaryTabsSkeleton />;

  return (
    <HeaderSummaryTabs title={client?.fullName || ''} logo={client?.avatar} actions={<Actions />}>
      <RouterTab
        tabs={clientTabs}
        prefix={`/crm/clients/${clientId as string}`}
        translationNs={'clients'}
        variant='scrollable'
        scrollButtons='auto'
        allowScrollButtonsMobile
      />
    </HeaderSummaryTabs>
  );
};

export default memo(ClientHeaderDetails);

export const Actions = () => {
  return (
    <Box gap={1} display={'flex'}>
      <ClientEditButton />
      <ClientDeleteButton />
    </Box>
  );
};
