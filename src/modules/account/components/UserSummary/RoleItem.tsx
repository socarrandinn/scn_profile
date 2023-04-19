import { memo } from 'react';
import { ListItem, ListItemAvatar, ListItemText, IconButton, Tooltip, CircularProgress } from '@mui/material';
import { useDeleteRolesUser } from 'modules/security/users/hooks/useDeleteRolesUser';
import { useTranslation } from 'react-i18next';
import { RoleAvatar } from 'modules/security/roles/components/RoleAvatar';
import { IRoleSetting } from 'modules/security/users/interfaces/IRoleSetting';
import DeleteIcon from '@mui/icons-material/Delete';

type RoleListProps = {
  role: IRoleSetting;
  roles: IRoleSetting[];
  userId: string;
  readOnly?: boolean;
};

const RoleItem = ({ role, roles, userId, readOnly }: RoleListProps) => {
  const { t } = useTranslation('common');
  const { isLoading, mutate } = useDeleteRolesUser(userId);

  return (
    <ListItem
      key={role?.role}
      secondaryAction={
        !readOnly && (
          <Tooltip title={t('delete')}>
            <IconButton
              onClick={() => {
                mutate(role?.role);
              }}
              size={'small'}
              disabled={isLoading}
            >
              {isLoading ? <CircularProgress size={16} /> : <DeleteIcon fontSize={'small'} />}
            </IconButton>
          </Tooltip>
        )
      }
    >
      <ListItemAvatar>
        <RoleAvatar role={role} />
      </ListItemAvatar>

      <ListItemText primary={role?.name} />
    </ListItem>
  );
};

export default memo(RoleItem);
