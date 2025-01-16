import { Suspense, useMemo } from 'react';
import { PageTabPaperLayout } from 'layouts/index';
import { ChildrenProps, PageLoader } from '@dfl/mui-react-common';
import { RouteLoader } from '@dfl/react-security';
import { mapTabs } from 'modules/security/users/routes/users-types.tabs';
import { mapRoutes } from 'modules/security/users/routes/users-types.routes';
import { HeadCell } from '@dfl/mui-admin-layout';
import { SPACE_TYPE } from 'modules/security/users/constants/space-types.constants';

type UserListContainerProps = ChildrenProps & {
  listComponent: any,
  path: string,
  permission?: string,
  userType: SPACE_TYPE
  columns: HeadCell[]
}

const useTabsConfig = (path: string) => {
  return useMemo(() => mapTabs(path), [path]);
};

const useTabRoutes = (userType: SPACE_TYPE, listComponent: any) => {
  return useMemo(() => mapRoutes(userType, listComponent), [userType, listComponent]);
};

const UserListContainer = ({ path, userType, listComponent, children }: UserListContainerProps) => {
  const userTabs = useTabsConfig(path);
  const userTabsRouts = useTabRoutes(userType, listComponent);

  return (
    <PageTabPaperLayout prefix={path} tabs={userTabs} actions={children}>
      <Suspense fallback={<PageLoader size={'screen'} />}>
        <RouteLoader routes={userTabsRouts} notfoundRedirect={`${path}/all`} />
      </Suspense>
    </PageTabPaperLayout>
  );
};

export default UserListContainer;
