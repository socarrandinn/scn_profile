import { memo } from 'react';
import { useBreadcrumbName } from '@dfl/mui-admin-layout';
import { useRoleDetail } from 'modules/security/roles/contexts';
import { RoleDetailsContent } from '../components/RoleDetailsContent';
import { PageLayout } from 'layouts/index';
import { RoleHeaderDetails } from '../components/RoleHeaderDetails';

const RoleDetailsContainer = () => {
  const { isLoading, data } = useRoleDetail();
  useBreadcrumbName(data?._id || '', data?.name, isLoading);

  return (
    <PageLayout>
      <RoleHeaderDetails />
      <PageLayout>
        <RoleDetailsContent />
      </PageLayout>
    </PageLayout>
  );
};

export default memo(RoleDetailsContainer);
