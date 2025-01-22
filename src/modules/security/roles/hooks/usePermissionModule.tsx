import { ChangeEvent, useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { section } from '../containers/RolePermissionsContainer';

interface UsePermissionModuleProps {
  permissionsOptions: string[];
  setPermissionsChanged?: (permissionsChanged: boolean) => void;
  setPermissions: React.Dispatch<React.SetStateAction<string[]>>;
  permissions: string[];
}

export const usePermissionModule = ({
  permissionsOptions,
  setPermissionsChanged: setPermsissionsChanged,
  setPermissions,
  permissions,
}: UsePermissionModuleProps) => {
  const { t } = useTranslation('role');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handlePermissionChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setPermsissionsChanged && setPermsissionsChanged(true);
      const { name, checked } = event.target;
      setPermissions((prevPermissions) => {
        if (checked) {
          return [...prevPermissions, name];
        } else {
          return prevPermissions.filter((permission) => permission !== name);
        }
      });
    },
    [setPermissions, setPermsissionsChanged],
  );

  const handleSearchChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  }, []);

  const filteredPermissionsOptions = useMemo(
    () =>
      permissionsOptions.filter((option) =>
        t(`permissionsRole.${option}`).toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    [permissionsOptions, searchTerm, t],
  );

  // Verifica si todos los permisos de una sección están seleccionados
  const verifySelectedAllPermissionsBySection = useCallback(
    (sectionLabel: string) => {
      // Obtiene todos los permisos de la sección
      const permissionsBySection = section[sectionLabel]?.flatMap((module) => module.permissions) || [];
      // Verifica si todos los permisos de la sección están seleccionados
      return permissionsBySection.every((permiso) => permissions.includes(permiso));
    },
    [permissions],
  );

  // Verifica si todos los permisos de un módulo dentro de una sección están seleccionados
  const verifySelectedAllPermissionsByModuleInSection = useCallback(
    (sectionLabel: string, moduleLabel: string) => {
      // Encuentra el módulo dentro de la sección y obtiene sus permisos
      const permissionsByModule =
        section[sectionLabel]?.find((module) => module.label === moduleLabel)?.permissions || [];
      // Verifica si todos los permisos del módulo están seleccionados
      return permissionsByModule.every((permiso) => permissions.includes(permiso));
    },
    [permissions],
  );

  const handleModuleSelectAllChange = useCallback(
    (sectionLabel: string, moduleLabel: string) => {
      setPermsissionsChanged && setPermsissionsChanged(true);

      if (verifySelectedAllPermissionsByModuleInSection(sectionLabel, moduleLabel)) {
        const permisosToExclude: string[] =
          section[sectionLabel]?.find((module) => module.label === moduleLabel)?.permissions || [];

        const newPermissions = permissions.filter((permiso) => !permisosToExclude.includes(permiso));

        setPermissions(newPermissions);
      } else {
        const permisosAfaltantes =
          section[sectionLabel]?.find((module) => module.label === moduleLabel)?.permissions || [];

        const permisosNoSeleccionados = permisosAfaltantes.filter((permiso) => !permissions.includes(permiso));

        setPermissions((prevPermissions) => [...prevPermissions, ...permisosNoSeleccionados]);
      }
    },
    [permissions, setPermissions, setPermsissionsChanged, verifySelectedAllPermissionsByModuleInSection],
  );

  const handleSectionSelectAllChange = useCallback(
    (sectionLabel: string) => {
      setPermsissionsChanged && setPermsissionsChanged(true);
      const permisosSection: string[] = section[sectionLabel]?.flatMap((module) => module.permissions) || [];

      if (verifySelectedAllPermissionsBySection(sectionLabel)) {
        const newPermissions: string[] = permissions.filter((permiso: string) => !permisosSection.includes(permiso));
        setPermissions(newPermissions);
      } else {
        const permisosFaltantes = permisosSection.filter((permiso) => !permissions.includes(permiso));
        setPermissions((prevPermissions) => [...prevPermissions, ...permisosFaltantes]);
      }
    },
    [permissions, setPermissions, setPermsissionsChanged, verifySelectedAllPermissionsBySection],
  );

  return {
    searchTerm,
    filteredPermissionsOptions,
    handlePermissionChange,
    handleSearchChange,
    verifySelectedAllPermissionsByModuleInSection,
    verifySelectedAllPermissionsBySection,
    handleModuleSelectAllChange,
    handleSectionSelectAllChange,
  };
};
