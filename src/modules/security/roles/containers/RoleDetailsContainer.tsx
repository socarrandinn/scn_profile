import { memo } from 'react';
import { DetailContent, DetailLayout, DetailSummary } from '@dfl/mui-form-layout';
import { CenterPageLayout } from 'layouts/index';
import RoleDetailsSummary from 'modules/security/roles/containers/RoleDetailsSummary';
import RoleUsersTable from 'modules/security/roles/containers/RoleUsersTable';
import { RolePermissionList } from 'modules/security/roles/components/RolePermissionList';
import { Divider, Paper, Stack } from '@mui/material';
import { useBreadcrumbName } from '@dfl/mui-admin-layout';
import { useRoleDetail } from 'modules/security/roles/contexts';

const RoleDetailsContainer = () => {
  const { isLoading, data } = useRoleDetail()
  useBreadcrumbName(data?._id || '', data?.name, isLoading);

  return (
    <CenterPageLayout>
      <DetailLayout>
        <DetailSummary ghost>
          <Paper sx={{ marginBottom: { md: 3 } }}>
            <Stack direction={'column'} divider={<Divider orientation='horizontal' light />} spacing={0}>
              <RoleDetailsSummary />
            </Stack>
          </Paper>
        </DetailSummary>
        <DetailContent ghost>
          <RoleUsersTable />
          <RolePermissionList />
        </DetailContent>
      </DetailLayout>
    </CenterPageLayout>
  );
};

export default memo(RoleDetailsContainer);
