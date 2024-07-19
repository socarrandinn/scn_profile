import { memo } from 'react';
import { PageLayout } from 'layouts/index';
import { useBreadcrumbName } from '@dfl/mui-admin-layout';
import { useRoleProviderDetail } from '../contexts/RoleProviderDetailContext';
import { RoleProviderDetailsContent } from '../components/RoleProviderDetailsContent';
import RoleProviderHeaderDetails from '../components/RoleProviderHeaderDetails/RoleProviderHeaderDetails';

const RoleProviderDetailsContainer = () => {
  const { isLoading, data } = useRoleProviderDetail();
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
