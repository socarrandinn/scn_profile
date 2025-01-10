import { Suspense, useMemo } from 'react';
import { PageTabPaperLayout } from 'layouts/index';
import { PageLoader } from '@dfl/mui-react-common';
import { RouteLoader } from '@dfl/react-security';
import { mapTabs } from 'modules/security/users/routes/users-types.tabs';
import { mapRoutes } from 'modules/security/users/routes/users-types.routes';
import { HeadCell } from '@dfl/mui-admin-layout';
import { SPACE_TYPE } from 'modules/security/users/constants/space-types.constants';

type UserListContainerProps = {
  path: string,
  permission?: string,
  userType: SPACE_TYPE
  columns: HeadCell[]
}

const useTabsConfig = (path: string) => {
  return useMemo(() => mapTabs(path), [path]);
};

const useTabRoutes = (userType: SPACE_TYPE) => {
  return useMemo(() => mapRoutes(userType), [userType]);
};

const UserListContainer = ({ path, userType, columns }: UserListContainerProps) => {
  const userTabs = useTabsConfig(path);
  const userTabsRouts = useTabRoutes(userType);

  return (
    <PageTabPaperLayout prefix={path} tabs={userTabs}>
      <Suspense fallback={<PageLoader size={'screen'} />}>
        <RouteLoader routes={userTabsRouts} notfoundRedirect={`${path}/all`} />
      </Suspense>
    </PageTabPaperLayout>
  );
};

export default UserListContainer;
