import { memo } from 'react';
import { PermissionList } from 'modules/security/roles/components/PermissionList';
import { Button, Paper, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { FlexBox } from '@dfl/mui-react-common';
import { useToggle } from '@dfl/hook-utils';
import SecurityIcon from '@mui/icons-material/Security';
import { useRoleProviderDetail } from '../../contexts/RoleProviderDetailContext';

const RoleProviderPermissionList = () => {
  const { data: role, isLoading } = useRoleProviderDetail();
  const { t } = useTranslation('role');

  const { onOpen } = useToggle(false);

  return (
    <Paper sx={{ marginBottom: 3, padding: 4, paddingTop: 3 }}>
      <FlexBox alignItems={'center'} justifyContent={'space-between'} mb={3}>
        <Typography variant={'h2'}>{t('permissions')}</Typography>
        <Button onClick={onOpen} variant={'contained'} disabled={isLoading || role?.isSystemRole}>
          <SecurityIcon fontSize={'small'} sx={{ mr: 1 }} /> {t('permissionManage')}
        </Button>
      </FlexBox>
      <PermissionList permissions={role?.permissions} />
    </Paper>
  );
};

export default memo(RoleProviderPermissionList);
