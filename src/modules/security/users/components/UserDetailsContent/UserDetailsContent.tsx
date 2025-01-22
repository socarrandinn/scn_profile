import { Box } from '@mui/material';
import { memo } from 'react';
import { RouteLoader, RouterTab } from '@dfl/react-security';
import accountRoutes from 'modules/security/users/routes/account';
import { TabsHeader } from 'modules/common/components/TabsWithSections/TabsHeader';
import { useUserDetail } from 'modules/security/users/contexts/UserDetailContext';
import { useBreadcrumbName } from '@dfl/mui-admin-layout';
import { userDetailsTabs } from '../../constants/user-details.tabs';

const UserDetailsContent = () => {
  const { user, isLoading } = useUserDetail();
  useBreadcrumbName(user?._id || '', user?.fullName, isLoading);

  return (
    <Box pt={1}>
      <TabsHeader>
        <RouterTab
          tabs={userDetailsTabs}
          prefix={`/security/users/user/${user?._id as string}`}
          translationNs={'account'}
        />
      </TabsHeader>
      <Box>
        <RouteLoader
          routes={accountRoutes}
          notfoundRedirect={`/security/users/user/${user?._id as string}/general`}
        />
      </Box>
    </Box>
  );
};

export default memo(UserDetailsContent);
