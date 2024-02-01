import { Stack } from '@mui/material';
import React, { memo } from 'react';
import { ClientGeneralBasic } from 'modules/crm/clients/components/ClientGeneralBasic';
import { ClientGeneralContact } from 'modules/crm/clients/components/ClientGeneralContact';

const ClientGeneralContainer = () => {
  return (
    <Stack mb={{ xs: 2, md: 4 }}>
      <ClientGeneralBasic />
      <ClientGeneralContact />
    </Stack>
  );
};

export default memo(ClientGeneralContainer);
