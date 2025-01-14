import { Button, Stack, Typography } from '@mui/material';
import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useClientDetails } from 'modules/crm/clients/context/ClientDetailsContext';
import { RoleListSkeleton, RolesRenderTagList } from 'modules/crm/clients/components/RolesList';
import SecurityIcon from '@mui/icons-material/Security';
import { useToggle } from '@dfl/hook-utils';
import AddRoleToClientModal from 'modules/crm/clients/components/AddRoleToClientModal/AddRoleToClientModal';

const ClientManageRolesContainer = () => {
  const { t } = useTranslation('clients');
  const { client, isLoading } = useClientDetails();
  const { isOpen, onClose, onOpen } = useToggle(false);

  return (
    <Stack gap={3}>
      <Stack direction={'row'} justifyContent={'space-between'}>
        <Typography variant={'h3'}>{t('roles.title')}</Typography>
        <Button onClick={onOpen} variant={'contained'} disabled={isLoading}>
          <SecurityIcon fontSize={'small'} sx={{ mr: 1 }} /> {t('roles.manageRoles')}
        </Button>
      </Stack>

      {isLoading ? <RoleListSkeleton /> : <RolesRenderTagList roles={client?.security?.roles || []} />}

      <AddRoleToClientModal client={client} open={isOpen} onClose={onClose} />
    </Stack>
  );
};

export default memo(ClientManageRolesContainer);
