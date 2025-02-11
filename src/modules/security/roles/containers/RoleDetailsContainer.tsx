import { memo } from 'react';
import { useBreadcrumbName } from '@dfl/mui-admin-layout';
import { useRoleDetail } from 'modules/security/roles/contexts';
import { RoleDetailsContent } from '../components/RoleDetailsContent';
import { PageLayout } from 'layouts/index';
import { RoleHeaderDetails } from '../components/RoleHeaderDetails';
import { SPACE_TYPE } from 'modules/security/users/constants/space-types.constants';

const RoleDetailsContainer = ({ type }: { type: SPACE_TYPE }) => {
  const { isLoading, data } = useRoleDetail();
  useBreadcrumbName(data?._id || '', data?.name, isLoading);

  return (
    <PageLayout>
      <RoleHeaderDetails type={type} />
      <PageLayout>
        <RoleDetailsContent />
      </PageLayout>
    </PageLayout>
  );
};

export default memo(RoleDetailsContainer);
