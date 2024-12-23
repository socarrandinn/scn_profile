import { useToggle } from '@dfl/hook-utils';
import { Box, Button, Skeleton } from '@mui/material';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import AddRoleToUserModal from 'modules/security/users/components/AddRoleToUserModal/AddRoleToUserModal';
import RoleList from './RoleList';
import { FlexBox } from '@dfl/mui-react-common';
import { useSecurity } from '@dfl/react-security';
import { IUser } from 'modules/security/users/interfaces/IUser';

type UserRoleInfoProps = {
  isLoading: boolean;
  user?: IUser;
}

const UserRoleInfo = ({ isLoading, user }: UserRoleInfoProps) => {
  const { t } = useTranslation('users');
  const { isOpen, onOpen, onClose } = useToggle(false);
  const { hasPermission } = useSecurity();
  const canEdit = hasPermission('ROLE:ASSIGN');

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
        <RoleList roles={user?.security?.roles} userId={user?._id as string} readOnly={!canEdit} />
      )}
      {canEdit
        ? (
          <Box px={2}>
            <Button onClick={onOpen} variant='text' color={'primary'} size='medium'>
              {t('changeRole')}
            </Button>
          </Box>
          )
        : null}

      <AddRoleToUserModal user={user} open={isOpen} onClose={onClose} />
    </>
  );
};

export default memo(UserRoleInfo);
