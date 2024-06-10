import { Box } from '@mui/material';
import { memo } from 'react';
import { RouteLoader, RouterTab } from '@dfl/react-security';
import accountRoutes from 'modules/security/users/routes/account';
import { accountSystemTabs } from 'modules/security/users/constants/account.tabs';
import { TabsHeader } from 'modules/common/components/TabsWithSections/TabsHeader';
import { useUserDetail } from 'modules/security/users/contexts/UserDetail';
import { useBreadcrumbName } from '@dfl/mui-admin-layout';

const UserSystemDetailsContent = () => {
  const { user, isLoading } = useUserDetail();
  useBreadcrumbName(user?._id || '', user?.fullName, isLoading);

  return (
    <Box pt={1}>
      <TabsHeader>
        <RouterTab
          tabs={accountSystemTabs}
          prefix={`/security/users/system/${user?._id as string}`}
          translationNs={'account'}
        />
      </TabsHeader>
      <Box>
        <RouteLoader
          routes={accountRoutes}
          notfoundRedirect={`/security/users/system/${user?._id as string}/general`}
        />
      </Box>
    </Box>
  );
};

export default memo(UserSystemDetailsContent);
