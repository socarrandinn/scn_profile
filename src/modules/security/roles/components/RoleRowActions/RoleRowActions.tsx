import { memo, useCallback, useMemo } from 'react';
import { Stack } from '@mui/material';
import { useToggle } from '@dfl/hook-utils';
import { useParamsLink } from '@dfl/react-security';
import { useDeleteRole } from 'modules/security/roles/hooks/useDeleteRole';
import { DeleteRowAction, EditRowActions, RowActions } from '@dfl/mui-admin-layout';
import SecurityIcon from '@mui/icons-material/Security';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import { SPACE_TYPE } from 'modules/security/users/constants/space-types.constants';
import { ROLE_ROUTE_MAP } from '../../constants/role-provider.enum';
import { IRole } from '../../interfaces';

type Props = {
  data: IRole;
  type: SPACE_TYPE;
};

const SecurityIconRole = () => {
  return <SecurityIcon fontSize={'small'} />;
};

const RoleRowActions = ({ data, type }: Props) => {
  const { t } = useTranslation('role');
  const { isOpen, onClose, onOpen } = useToggle();

  const rowId = useMemo(() => data?._id as string, [data?._id]);

  const navigate = useNavigate();
  const handleEdit = useParamsLink({ edit: rowId });
  const { mutate, isLoading, error } = useDeleteRole(rowId as string, onClose);
  const roleType = useMemo(() => {
    return ROLE_ROUTE_MAP[type];
  }, [type]);

  const handleOpen = useCallback(() => {
    navigate(`/security/roles/${roleType}/${rowId}/permissions`);
  }, [rowId, navigate]);

  return (
    <Stack direction='row' spacing={1}>
      {!data?.isSystemRole && <>
        <RowActions
          tooltip={t('role:permissionManage')}
          onClick={handleOpen}
          icon={SecurityIconRole}
        />
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
      }
    </Stack>
  );
};

export default memo(RoleRowActions);
