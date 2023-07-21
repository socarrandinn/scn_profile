import { memo } from 'react';
import { DetailContent, DetailLayout, DetailSummary } from '@dfl/mui-form-layout';
import { CenterPageLayout } from 'layouts/index';
import { Divider, Paper, Stack } from '@mui/material';
import { useBreadcrumbName } from '@dfl/mui-admin-layout';
import RoleProviderDetailsSummary from './RoleProviderDetailsSummary';
import { useRoleProviderDetail } from '../contexts/RoleProviderDetailContext';
import RoleUsersTable from './RoleUsersTable';
import RoleProvidersTable from './RoleProvidersTable';

const RoleProviderDetailsContainer = () => {
  const { isLoading, data } = useRoleProviderDetail();
  useBreadcrumbName(data?._id || '', data?.name, isLoading);

  return (
    <CenterPageLayout>
      <DetailLayout>
        <DetailSummary ghost>
          <Paper sx={{ marginBottom: { md: 3 } }}>
            <Stack direction={'column'} divider={<Divider orientation='horizontal' light />} spacing={0}>
              <RoleProviderDetailsSummary />
            </Stack>
          </Paper>
        </DetailSummary>
        <DetailContent ghost>
          <RoleProvidersTable />
          {/* <RolePermissionList /> */}
        </DetailContent>
      </DetailLayout>
    </CenterPageLayout>
  );
};

export default memo(RoleProviderDetailsContainer);
