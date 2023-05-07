import { Box } from '@mui/material';
import { memo } from 'react';
import { RouteLoader, RouterTab } from '@dfl/react-security';
import accountRoutes from 'modules/security/users/routes/account';
import { accountTabs } from 'modules/security/users/constants/account.tabs';
import { useParams } from 'react-router-dom';
import { TabsHeader } from 'modules/common/components/TabsWithSections/TabsHeader';
import { useUserDetail } from 'modules/security/users/contexts/UserDetail';
import {useBreadcrumbName} from "@dfl/mui-admin-layout";

const UserDetailsContent = () => {
  const { id } = useParams();
  const { user, isLoading } = useUserDetail();
  useBreadcrumbName(user?._id || '', user?.fullName, isLoading);

  return (
    <Box pt={1}>
      <TabsHeader>
        <RouterTab tabs={accountTabs} prefix={`/security/users/${id as string}`} translationNs={'account'} />
      </TabsHeader>
      <Box>
        <RouteLoader routes={accountRoutes} notfoundRedirect={`/security/users/${id as string}/general`} />
      </Box>
    </Box>
  );
};

export default memo(UserDetailsContent);
