import { memo } from 'react';
import { RoleInfoDetail } from 'modules/security/roles/components/RoleInfoDetail';
import { RoleDetailActions } from 'modules/security/roles/components/RoleDetailActions';
import { useRoleDetail } from '../contexts';
import { SummaryWithAvatarSkeleton } from 'components/CommonLoadings';
import { Divider } from '@mui/material';

const RoleDetailsSummary = () => {
  const { isLoading } = useRoleDetail();

  if (isLoading) {
    return <SummaryWithAvatarSkeleton />;
  }

  return (
    <>
      <RoleInfoDetail />
      <Divider />
      <RoleDetailActions />
    </>
  );
};

export default memo(RoleDetailsSummary);
