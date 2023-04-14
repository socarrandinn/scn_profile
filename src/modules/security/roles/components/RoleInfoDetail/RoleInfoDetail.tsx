import { memo } from 'react';
import { Stack, Typography } from '@mui/material';
import { useRoleDetail } from 'modules/security/roles/contexts';
import { DetailStack } from '@dfl/mui-react-common';
import { ROLE_DETAILS_SUMMARY } from 'modules/security/roles/constants';
import AvatarUploadBase from 'components/UploadFiles/AvatarUploadBase';
import { useToggle } from '@dfl/hook-utils';
import SecurityIcon from '@mui/icons-material/Security';
import UpdateIconRoleModal from 'modules/security/roles/containers/UpdateIconRoleModal';

const RoleInfoDetail = () => {
  const { data: role } = useRoleDetail();
  const { isOpen, onOpen, onClose } = useToggle();
  return (
    <Stack p={2} pt={5} spacing={2}>
      <Stack direction='column' alignItems='center' spacing={0}>
        <AvatarUploadBase
          sx={{ bgcolor: 'primary.dark' }}
          src={`/images/roles/${role?.icon as string}.png`}
          onClick={onOpen}
        >
          <SecurityIcon sx={{ fontSize: 50 }} />
        </AvatarUploadBase>
        <Typography variant={'h2'} mt={2}>
          {role?.name}
        </Typography>
        <Typography color={'text.secondary'}>{role?.description}</Typography>
      </Stack>
      <DetailStack details={ROLE_DETAILS_SUMMARY} data={role} />
      <UpdateIconRoleModal open={isOpen} onClose={onClose} />
    </Stack>
  );
};

export default memo(RoleInfoDetail);
