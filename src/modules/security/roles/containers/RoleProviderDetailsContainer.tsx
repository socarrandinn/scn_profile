import { memo } from 'react';
import { PageLayout } from 'layouts/index';
import { useBreadcrumbName } from '@dfl/mui-admin-layout';
import { useRoleDetail } from '../contexts/RoleDetailContext';
import { RoleProviderDetailsContent } from '../components/RoleProviderDetailsContent';
import RoleProviderHeaderDetails from '../components/RoleProviderHeaderDetails/RoleProviderHeaderDetails';

const RoleProviderDetailsContainer = () => {
  const { isLoading, data } = useRoleDetail();
  useBreadcrumbName(data?._id || '', data?.name, isLoading);

  return (
    <>
      <RoleProviderHeaderDetails />
      <PageLayout>
        <RoleProviderDetailsContent />
      </PageLayout>
    </>
  );
};

export default memo(RoleProviderDetailsContainer);
