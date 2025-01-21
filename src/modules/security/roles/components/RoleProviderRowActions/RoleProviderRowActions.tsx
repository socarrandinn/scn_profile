import { memo, useCallback, useMemo } from 'react';
import { Stack } from '@mui/material';
import { useToggle } from '@dfl/hook-utils';
import { useParamsLink } from '@dfl/react-security';
import { DeleteRowAction, EditRowActions, RowActions } from '@dfl/mui-admin-layout';
import SecurityIcon from '@mui/icons-material/Security';
import { useRoleRowPermission } from 'modules/security/roles/contexts/RoleRowPermissionContext';
import { IRole } from 'modules/security/roles/interfaces';
import { useTranslation } from 'react-i18next';
import { useDeleteRoleProvider } from '../../hooks/useDeleteRoleProvider';
import { useNavigate } from 'react-router';

const SecurityIconRole = () => {
  return <SecurityIcon fontSize={'small'} />;
};

const RoleProviderRowActions = (data: IRole) => {
  const rowId = useMemo(() => data?._id as string, [data?._id]);
  const navigate = useNavigate();
  const { isOpen, onClose, onOpen } = useToggle();
  const { t } = useTranslation('role');

  const handleEdit = useParamsLink({ edit: rowId });

  const { mutate, isLoading, error } = useDeleteRoleProvider(rowId, onClose);

  const handleOpen = useCallback(() => {
    navigate(`/security/roles/providers/${rowId}/permissions`);
  }, [rowId, navigate]);

  return (
    <Stack direction='row' spacing={1}>
      {!data?.isSystemRole && (
        <>
          <RowActions tooltip={t('role:permissionManage')} onClick={handleOpen} icon={SecurityIconRole} />
          <EditRowActions onClick={handleEdit} />
          <DeleteRowAction
            isOpen={isOpen}
            onOpen={onOpen}
            onClose={onClose}
            error={error}
            isLoading={isLoading}
            onDelete={mutate}
          />
        </>
      )}
    </Stack>
  );
};

export default memo(RoleProviderRowActions);
