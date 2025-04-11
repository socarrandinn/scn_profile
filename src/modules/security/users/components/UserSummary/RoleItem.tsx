import { memo, useCallback } from 'react';
import { CircularProgress, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import { useDeleteRolesUser } from 'modules/security/users/hooks/useDeleteRolesUser';
import { useTranslation } from 'react-i18next';
import { RoleAvatar } from 'modules/security/roles/components/RoleAvatar';
import { IRoleSetting } from 'modules/security/users/interfaces/IRoleSetting';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@dfl/mui-react-common';

type RoleListProps = {
  role: IRoleSetting;
  roles: IRoleSetting[];
  userId: string;
  readOnly?: boolean;
};

const RoleItem = ({ role, roles, userId, readOnly }: RoleListProps) => {
  const { t } = useTranslation('common');
  const { isLoading, mutate } = useDeleteRolesUser(userId, roles);

  const deleteHandler = useCallback(() => {
    mutate(role);
  }, [mutate, role]);

  return (
    <ListItem key={role?.role} sx={{ p: '2px 0px', mb: 0.5 }}>
      <ListItemAvatar sx={{ minWidth: 0, pr: 2 }}>
        <RoleAvatar role={role} bgColor='primary' />
      </ListItemAvatar>

      <ListItemText primary={role?.name} />

      {!readOnly && (
        <IconButton
          tooltip={t('delete')}
          onClick={deleteHandler}
          size={'small'}
          disabled={isLoading || role?.role === '678e76542365b4e6393f2214'}
          sx={{ p: 0 }}
        >
          {isLoading ? <CircularProgress size={16} /> : <DeleteIcon fontSize={'small'} color={'error'} />}
        </IconButton>
      )
      }
    </ListItem >
  );
};

export default memo(RoleItem);
