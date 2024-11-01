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
  TextField,
  Button,
  Box,
  Grow,
} from '@mui/material';
import Scrollbars from 'react-custom-scrollbars-2';
import { useTranslation } from 'react-i18next';
import { usePermissionModule } from '../../hooks/usePermissionModule';

interface IPermissions {
  permissionsOptions: string[];
  label: string;
  setPermsissionsChanged?: (permissionsChanged: boolean) => void;
  permissions: string[];
  setPermissions: React.Dispatch<React.SetStateAction<string[]>>;
}

const PermissionBoxModule = ({
  permissionsOptions,
  label,
  setPermsissionsChanged,
  permissions,
  setPermissions,
}: IPermissions) => {
  const { t } = useTranslation('role');

  const {
    searchTerm,
    filteredPermissionsOptions,
    handlePermissionChange,
    handleSearchChange,
    verifySelectedAllPermissionsByModule,
    handleSelectAllChange,
  } = usePermissionModule({
    permissionsOptions,
    setPermissionsChanged: setPermsissionsChanged,
    setPermissions,
    permissions,
  });

  return (
    <Grow in mountOnEnter unmountOnExit>
      <Card sx={{ width: '100%' }}>
        <CardHeader
          title={
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant='h2'>{t(`${label}`)}</Typography>{' '}
              <Button
                onClick={() => {
                  handleSelectAllChange(label);
                }}
              >
                {verifySelectedAllPermissionsByModule(label) ? t('deselectAll') : t('selectAll')}
              </Button>
            </Box>
          }
          subheader={<Divider sx={{ mt: 0.5 }} orientation='horizontal' />}
          sx={{ pb: 0 }}
        />
        <CardContent>
          <TextField
            label={t('common:search')}
            variant='standard'
            fullWidth
            value={searchTerm}
            onChange={handleSearchChange}
            sx={{ mb: 1 }}
          />
          <Scrollbars autoHide style={{ width: 'auto', height: 350 }}>
            <List sx={{ px: 0 }}>
              {filteredPermissionsOptions.map((role, index) => (
                <ListItem
                  key={role}
                  sx={{
                    backgroundColor: index % 2 === 0 ? 'transparent' : 'rgba(0, 0, 0, 0.04)',
                  }}
                >
                  <ListItemText id={`switch-list-label-${role}`} primary={t(`permissionsRole.${role}`)} />
                  <Switch
                    edge='end'
                    onChange={handlePermissionChange}
                    name={role}
                    checked={permissions?.includes(role) ?? false}
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
    </Grow>
  );
};

export default PermissionBoxModule;
