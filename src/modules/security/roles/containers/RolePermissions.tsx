import { memo, useCallback, useEffect, useMemo, useState } from 'react';
import useAddPermissionToRoleForm from '../hooks/useAddPermissionToRoleForm';
import { IModule, Permission } from '../interfaces';
import { permissionSection } from '../interfaces/sections';
import PermissionToolbarModule from '../components/PermissionModule/PermissionToolbarModule';
import { Box, Grid } from '@mui/material';
import { PermissionSection } from '../components/PermissionSection';
type RolePermissionsProps = {
  role: any;
};

const getSectionsWithPermissions = (
  sections: Record<string, IModule[]>,
  permissionsToCheck: Permission[],
): string[] => {
  return Object.keys(sections).filter((section) =>
    sections[section].some((module) =>
      module.permissions.some((permission) => permissionsToCheck.includes(permission)),
    ),
  );
};

const RolePermissions = ({ role }: RolePermissionsProps) => {
  const filterMatchedModules = useMemo(
    () => getSectionsWithPermissions(permissionSection, (role?.permissions as any[]) || []),
    [role?.permissions],
  );

  const initValues = useMemo(() => {
    return filterMatchedModules.map((section) => section);
  }, [filterMatchedModules]);

  const [permissions, setPermissions] = useState<string[]>(role?.permissions || []);
  const [selectedBoxModules, setSelectedBoxModules] = useState<string[]>(initValues || []);
  const [permissionsChanged, setPermissionsChanged] = useState<boolean>(false);

  useEffect(() => {
    setPermissions(role?.permissions || []);
    setSelectedBoxModules(initValues);
  }, [role?.permissions, initValues]);

  const { mutate: addPermission } = useAddPermissionToRoleForm(role);

  const handleSavePermissions = useCallback(() => {
    addPermission(permissions, {
      onSuccess: () => {
        setPermissionsChanged(false);
      },
    });
  }, [addPermission, permissions]);

  return (
    <>
      <PermissionToolbarModule
        sections={Object.keys(permissionSection)?.map((section): string => section)}
        selectedBoxModules={selectedBoxModules}
        setSelectedBoxModules={setSelectedBoxModules}
        permissionsChanged={permissionsChanged}
        handleSavePermissions={handleSavePermissions}
      />

      <Box sx={{ mb: 6 }}>
        <Grid container spacing={{ xs: 1, md: 3 }}>
          {Object.entries(permissionSection).map(
            (section) =>
              selectedBoxModules.includes(section[0]) && (
                <Grid item xs={12} sm={6} xl={4} key={section[0]}>
                  <PermissionSection
                    modules={section[1]}
                    label={section[0]}
                    permissions={permissions}
                    setPermissions={setPermissions}
                    setPermissionsChanged={setPermissionsChanged}
                  />
                </Grid>
              ),
          )}
        </Grid>
      </Box>
    </>
  );
};

export default memo(RolePermissions);
