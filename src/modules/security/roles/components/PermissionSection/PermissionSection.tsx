import { Box, Button, Card, CardContent, CardHeader, Stack, Typography } from '@mui/material';
import PermissionBoxModule from '../PermissionModule/PermissionBoxModule';
import { IModule } from '../../interfaces';
import { Dispatch, memo, SetStateAction, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import PermissionSearchField from '../PermissionSearchField/PermissionSearchField';
import { usePermissionModule } from '../../hooks/usePermissionModule';

type Props = {
  modules: IModule[];
  label: string;
  permissions: string[];
  setPermissions: Dispatch<SetStateAction<string[]>>;
  setPermissionsChanged: Dispatch<SetStateAction<boolean>>;
};
const PermissionSection = ({ modules, label, permissions, setPermissions, setPermissionsChanged }: Props) => {
  const { t } = useTranslation('role');

  const permissionsOptions = useMemo(() => {
    return modules.reduce<string[]>((acc, module) => [...acc, ...module.permissions], []);
  }, [modules]);

  const {
    searchTerm,
    filteredPermissionsOptions,
    handlePermissionChange,
    handleSearchChange,
    verifySelectedAllPermissionsByModuleInSection,
    verifySelectedAllPermissionsBySection,
    handleModuleSelectAllChange,
    handleSectionSelectAllChange,
  } = usePermissionModule({
    permissionsOptions,
    setPermissionsChanged,
    setPermissions,
    permissions,
  });

  return (
    <Card>
      <CardHeader
        title={
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography sx={{ flex: 1, ml: 1 }} variant='h2'>
              {t(`role:sections.${label}.title`)}
            </Typography>
            <Button
              onClick={() => {
                handleSectionSelectAllChange(label);
              }}
              color='primary'
            >
              {verifySelectedAllPermissionsBySection(label) ? t('deselectAll') : t('selectAll')}
            </Button>
          </Box>
        }
      />
      {/* <Scrollbars autoHeight autoHeightMin={50} autoHeightMax={1000}> */}
      <CardContent>
        <PermissionSearchField handleSearchChange={handleSearchChange} searchTerm={searchTerm} />
        <Stack sx={{ width: '100%', gap: 2 }}>
          {modules.map((module) => (
            <PermissionBoxModule
              key={module?.label}
              permissionsOptions={module.permissions}
              moduleLabel={module.label}
              sectionLabel={label}
              permissions={permissions}
              handlePermissionChange={handlePermissionChange}
              filteredPermissionsOptions={filteredPermissionsOptions}
              verifySelectedAllPermissionsByModuleInSection={verifySelectedAllPermissionsByModuleInSection}
              handleModuleSelectAllChange={handleModuleSelectAllChange}
            />
          ))}
        </Stack>
      </CardContent>
      {/*  </Scrollbars> */}
    </Card>
  );
};

export default memo(PermissionSection);
