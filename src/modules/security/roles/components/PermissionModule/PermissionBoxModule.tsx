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
  Grow,
  Collapse,
  styled,
  IconButtonProps,
  IconButton,
  Stack,
} from '@mui/material';
import { useTranslation } from 'react-i18next';

import { ChangeEvent, useMemo, useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface IPermissions {
  permissionsOptions: string[];
  moduleLabel: string;
  sectionLabel: string;
  permissions: string[];

  filteredPermissionsOptions: string[];
  handlePermissionChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleModuleSelectAllChange: (sectionLabel: string, moduleLabel: string) => void;

  verifySelectedAllPermissionsByModuleInSection: (sectionLabel: string, moduleLabel: string) => boolean;
}

const PermissionBoxModule = ({
  permissionsOptions,
  moduleLabel,
  sectionLabel,
  permissions,
  filteredPermissionsOptions,
  handlePermissionChange,
  handleModuleSelectAllChange,
  verifySelectedAllPermissionsByModuleInSection,
}: IPermissions) => {
  const { t } = useTranslation('role');

  const _permission = useMemo(() => {
    return permissionsOptions?.filter((p) => filteredPermissionsOptions.includes(p));
  }, [filteredPermissionsOptions, permissionsOptions]);

  const [expanded, setExpanded] = useState(true);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  if (_permission?.length === 0) return <></>;

  return (
    <Grow in mountOnEnter unmountOnExit>
      <Card sx={{ width: '100%', border: '1px solid #e0e0e070' }}>
        <CardHeader
          onClick={handleExpandClick}
          sx={{ ':hover': { cursor: 'pointer' }, mb: 0 }}
          title={
            <Stack sx={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
              <ExpandMore size='small' expand={expanded} aria-expanded={expanded} aria-label='show more'>
                <ExpandMoreIcon />
              </ExpandMore>
              <Typography lineHeight={1} sx={{ flex: 1, ml: 1 }} variant='h2'>
                {t(`role:sections.${sectionLabel}.modules.${moduleLabel}`)}
              </Typography>

              <Switch
                edge='end'
                onClick={(event) => {
                  event.stopPropagation();
                }}
                onChange={() => {
                  handleModuleSelectAllChange(sectionLabel, moduleLabel);
                }}
                name={moduleLabel}
                checked={verifySelectedAllPermissionsByModuleInSection(sectionLabel, moduleLabel) ?? false}
                color='primary'
                inputProps={{
                  'aria-labelledby': `switch-list-label-${moduleLabel}`,
                }}
              />
            </Stack>
          }
        />
        <Collapse in={expanded} timeout='auto' unmountOnExit>
          <Divider sx={{ mt: 0.5 }} orientation='horizontal' />
          <CardContent sx={{ height: '100%', padding: '0 8px 16px 8px' }}>
            {/*  <Scrollbars autoHide style={{ width: 'auto', height: 260 }}> */}
            <List sx={{ px: 0 }}>
              {_permission?.map((role, index) => (
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
            {/*  </Scrollbars> */}
          </CardContent>
        </Collapse>
      </Card>
    </Grow>
  );
};

export default PermissionBoxModule;

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

export const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: 'rotate(0deg)',
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: 'rotate(180deg)',
      },
    },
  ],
}));
