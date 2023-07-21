import { memo } from 'react';
import { Stack, Typography } from '@mui/material';
import { useRoleDetail } from 'modules/security/roles/contexts';
import { DetailStack } from '@dfl/mui-react-common';
import { ROLE_DETAILS_SUMMARY } from 'modules/security/roles/constants';
import UpdateIconRole from '../../containers/UpdateIconRole';
import { useRoleProviderDetail } from '../../contexts/RoleProviderDetailContext';
import UpdateIconRoleProvider from '../../containers/UpdateIconRoleProvider';

const RoleProviderInfoDetail = () => {
  const { data: role } = useRoleProviderDetail();

  return (
    <Stack p={2} pt={5} spacing={2}>
      <Stack direction='column' alignItems='center' spacing={0}>
        <UpdateIconRoleProvider />

        <Typography variant={'h2'} mt={2}>
          {role?.name}
        </Typography>
        <Typography color={'text.secondary'}>{role?.description}</Typography>
      </Stack>
      <DetailStack details={ROLE_DETAILS_SUMMARY} data={role} />
    </Stack>
  );
};

export default memo(RoleProviderInfoDetail);
