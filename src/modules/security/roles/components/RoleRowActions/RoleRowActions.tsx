import { memo, useCallback, useMemo } from 'react';
import { Stack } from '@mui/material';
import { useToggle } from '@dfl/hook-utils';
import { useParamsLink } from '@dfl/react-security';
import { useDeleteRole } from 'modules/security/roles/hooks/useDeleteRole';
import { DeleteRowAction, EditRowActions, RowActions } from '@dfl/mui-admin-layout';
import SecurityIcon from '@mui/icons-material/Security';
import { useRoleRowPermission } from 'modules/security/roles/contexts/RoleRowPermissionContext';
import { IRole } from 'modules/security/roles/interfaces';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';

const SecurityIconRole = () => {
  return <SecurityIcon fontSize={'small'} />;
};

const RoleRowActions = (data: IRole) => {
  const rowId = useMemo(() => data?._id as string, [data?._id]);
  const { isOpen, onClose, onOpen } = useToggle();
  const { t } = useTranslation('role');
  const navigate = useNavigate();

  const handleEdit = useParamsLink({ edit: rowId });

  const { mutate, isLoading, error } = useDeleteRole(rowId, onClose);

  const handleOpen = useCallback(() => {
    navigate(`/security/roles/system/${rowId}/permissions`);
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

export default memo(RoleRowActions);
