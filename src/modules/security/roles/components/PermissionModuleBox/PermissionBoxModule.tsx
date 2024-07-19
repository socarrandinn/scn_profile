import { ChangeEvent } from 'react';
import {
  Switch,
  Typography,
  Card,
  CardContent,
  List,
  ListItem,
  Divider,
  CardHeader,
  ListItemText,
} from '@mui/material';
import Scrollbars from 'react-custom-scrollbars-2';
import { useRoleDetail } from '../../contexts';
import { useTranslation } from 'react-i18next';

interface IPermissions {
  permissionsOptions: string[];
  label: string;
  useHook?: any;
}

const PermissionBoxModule = ({ permissionsOptions, label, useHook = useRoleDetail }: IPermissions) => {
  const { t } = useTranslation('role');
  const { permissions, setPermissions } = useHook();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;

    setPermissions((prevPermissions: string[]) => {
      if (checked) {
        return [...prevPermissions, name];
      } else {
        return prevPermissions.filter((permission) => permission !== name);
      }
    });
  };

  return (
    <Card sx={{ width: '100%' }}>
      <CardHeader
        title={<Typography variant='h2'>{label}</Typography>}
        subheader={<Divider sx={{ mt: 0.5 }} orientation='horizontal' />}
        sx={{ pb: 0 }}
      />
      <CardContent>
        <Scrollbars autoHide style={{ width: 'auto', height: 400 }}>
          <List sx={{ px: 0 }}>
            {permissionsOptions.map((role, index) => (
              <ListItem
                key={role}
                sx={{
                  backgroundColor: index % 2 === 0 ? 'transparent' : 'rgba(0, 0, 0, 0.04)',
                }}
              >
                <ListItemText id={`switch-list-label-${role}`} primary={t(`permissionsRole.${role}`)} />
                <Switch
                  edge='end'
                  onChange={handleChange}
                  name={role}
                  checked={permissions.includes(role)}
                  color='primary'
                  inputProps={{
                    'aria-labelledby': `switch-list-label-${role}`,
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Scrollbars>
      </CardContent>
    </Card>
  );
};

export default PermissionBoxModule;
