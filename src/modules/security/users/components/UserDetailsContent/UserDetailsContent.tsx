import { Box } from '@mui/material';
import { memo } from 'react';
import { RouteLoader, RouterTab, TabRouteType } from '@dfl/react-security';
import accountRoutes from 'modules/security/users/routes/account';
import { TabsHeader } from 'modules/common/components/TabsWithSections/TabsHeader';
import { useBreadcrumbName } from '@dfl/mui-admin-layout';
import { useUserDetail } from '../../contexts/UserDetailContext';
type Props = {
  path: string;
  tabs: TabRouteType[];
};

const UserDetailsContent = ({ path, tabs }: Props) => {
  const { user, isLoading } = useUserDetail();
  useBreadcrumbName(user?._id || '', user?.fullName, isLoading);

  return (
    <Box pt={1}>
      <TabsHeader>
        <RouterTab
          tabs={tabs}
          prefix={`/${path}/${user?._id as string}`}
          translationNs={'account'}
        />
      </TabsHeader>
      <Box>
        <RouteLoader
          routes={accountRoutes}
          notfoundRedirect={`/${path}/${user?._id as string}/general`}
        />
      </Box>
    </Box>
  );
};

export default memo(UserDetailsContent);
