import { memo } from 'react';
import { SummaryWithAvatarSkeleton } from 'components/CommonLoadings';
import { Divider } from '@mui/material';
import { useRoleProviderDetail } from '../contexts/RoleProviderDetailContext';
import RoleProviderInfoDetail from '../components/RoleInfoDetail/RoleProviderInfoDetail';
import RoleProviderDetailActions from '../components/RoleDetailActions/RoleProviderDetailActions';

const RoleProviderDetailsSummary = () => {
  const { isLoading } = useRoleProviderDetail();

  if (isLoading) {
    return <SummaryWithAvatarSkeleton />;
  }

  return (
    <>
      <RoleProviderInfoDetail />
      <Divider />
      <RoleProviderDetailActions />
    </>
  );
};

export default memo(RoleProviderDetailsSummary);
