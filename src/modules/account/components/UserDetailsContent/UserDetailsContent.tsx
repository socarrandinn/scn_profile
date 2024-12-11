import { Box } from '@mui/material';
import { memo } from 'react';
import { RouteLoader, RouterTab } from '@dfl/react-security';
import accountRoutes from 'modules/account/routes/account';
import { accountTabs } from 'modules/account/constants/account.tabs';
import { TabsHeader } from 'modules/common/components/TabsWithSections/TabsHeader';

const UserDetailsContent = () => {
  return (
    <Box pt={1}>
      <TabsHeader>
        <RouterTab tabs={accountTabs} prefix={'/account'} translationNs={'account'} />
      </TabsHeader>
      <Box>
        <RouteLoader routes={accountRoutes} notfoundRedirect={'/account/general'} />
      </Box>
    </Box>
  );
};

export default memo(UserDetailsContent);
