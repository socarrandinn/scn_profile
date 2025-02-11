import { memo } from 'react';
import { Stack, Typography } from '@mui/material';
import { DetailStack } from '@dfl/mui-react-common';
import { ROLE_DETAILS_SUMMARY } from 'modules/security/roles/constants';
import { useBreadcrumbName } from '@dfl/mui-admin-layout';
import UpdateIconRoleProvider from '../../containers/UpdateIconRoleProvider';
import { useRoleDetail } from '../../contexts/RoleDetailContext';

const RoleProviderInfoDetail = () => {
    const { data, isLoading } = useRoleDetail();
    useBreadcrumbName(data?._id || '', data?.name, isLoading);

    return (
        <Stack p={2} pt={5} spacing={2}>
            <Stack direction='column' alignItems='center' spacing={0}>
                <UpdateIconRoleProvider />

                <Typography variant={'h2'} mt={2}>
                    {data?.name}
                </Typography>
                <Typography color={'text.secondary'}>{data?.description}</Typography>
                <Typography color={'text.secondary '} className={'capitalize'}>Proveedor {data?.provider || ''}</Typography>
            </Stack>
            <DetailStack details={ROLE_DETAILS_SUMMARY} data={data} />
        </Stack>
    );
};

export default memo(RoleProviderInfoDetail);
