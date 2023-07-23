import { memo } from 'react';
import { Stack, Typography } from '@mui/material';
import { useRoleDetail } from 'modules/security/roles/contexts';
import { DetailStack } from '@dfl/mui-react-common';
import { ROLE_DETAILS_SUMMARY } from 'modules/security/roles/constants';
import UpdateIconRole from '../../containers/UpdateIconRole';
import { useRoleProviderDetail } from '../../contexts/RoleProviderDetailContext';
import UpdateIconRoleProvider from '../../containers/UpdateIconRoleProvider';
import { useBreadcrumbName } from '@dfl/mui-admin-layout';

const RoleProviderInfoDetail = () => {
  const { data, isLoading } = useRoleProviderDetail();
  useBreadcrumbName(data?._id || '', data?.name, isLoading);

  return (
    <Stack p={2} pt={5} spacing={2}>
      <Stack direction='column' alignItems='center' spacing={0}>
        <UpdateIconRoleProvider />

        <Typography variant={'h2'} mt={2}>
          {data?.name}
        </Typography>
        <Typography color={'text.secondary'}>{data?.description}</Typography>
      </Stack>
      <DetailStack details={ROLE_DETAILS_SUMMARY} data={data} />
    </Stack>
  );
};

export default memo(RoleProviderInfoDetail);
