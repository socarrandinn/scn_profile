import { Skeleton } from '@mui/material';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import AddRoleToUserModal from 'modules/security/users/components/AddRoleToUserModal/AddRoleToUserModal';
import RoleList from './RoleList';
import { FlexBox } from '@dfl/mui-react-common';
import { useSecurity } from '@dfl/react-security';
import { IUser } from 'modules/security/users/interfaces/IUser';
import { useSearchParams } from 'react-router-dom';

type UserRoleInfoProps = {
  isLoading: boolean;
  user?: IUser;
}

const UserRoleInfo = ({ isLoading, user }: UserRoleInfoProps) => {
  const { hasPermission } = useSecurity();
  const canEdit = hasPermission('ROLE:ASSIGN');
  const [searchParams, setSearchParams] = useSearchParams();
  const roleType = searchParams.get('roleType');

  const handleClose = useCallback(() => {
    const params = Object.fromEntries(searchParams.entries());
    delete params.roleType;
    setSearchParams(params);
  }, [searchParams, setSearchParams]);

  if (isLoading) {
    return (
      <FlexBox px={2} my={3} gap={2} flexDirection={'column'}>
        <FlexBox justifyContent={'space-between'}>
          <Skeleton width={100} />
          <Skeleton width={16} />
        </FlexBox>
        <FlexBox justifyContent={'space-between'}>
          <Skeleton width={100} />
          <Skeleton width={16} />
        </FlexBox>
      </FlexBox>
    );
  }

  return (
    <>
      {!!user?.security?.roles?.length && (
        <RoleList
          roles={user?.security?.roles}
          user={user}
          readOnly={!canEdit}
          canEdit={canEdit}
        />
      )}
      <AddRoleToUserModal user={user} open={!!roleType} onClose={handleClose} />
    </>
  );
};

export default memo(UserRoleInfo);
