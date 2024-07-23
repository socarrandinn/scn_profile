import { ChangeEvent, useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { modules } from '../containers/RolePermissionsContainer';

interface UsePermissionModuleProps {
  permissionsOptions: string[];
  setPermsissionsChanged?: (permissionsChanged: boolean) => void;
  setPermissions: React.Dispatch<React.SetStateAction<string[]>>;
  permissions: string[];
}

export const usePermissionModule = ({
  permissionsOptions,
  setPermsissionsChanged,
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

  const verifySelectedAllPermissionsByModule = useCallback(
    (label: string) => {
      const permissionsByModule = modules.find((module) => module.label === label)?.permissions || [];
      return permissionsByModule.every((permiso) => permissions.includes(permiso));
    },
    [permissions],
  );

  const handleSelectAllChange = useCallback(
    (label: string) => {
      setPermsissionsChanged && setPermsissionsChanged(true);
      if (verifySelectedAllPermissionsByModule(label)) {
        const permisosAquitar = modules
          .filter((module) => module.label === label)
          .flatMap((module) => module.permissions);
        // @ts-ignore
        const newPermissions = permissions.filter((permiso) => !permisosAquitar.includes(permiso));

        setPermissions(newPermissions);
      } else {
        setPermissions((prevPermissions) => {
          return [...prevPermissions, ...filteredPermissionsOptions];
        });
      }
    },
    [filteredPermissionsOptions, permissions],
  );

  return {
    searchTerm,
    filteredPermissionsOptions,
    handlePermissionChange,
    handleSearchChange,
    verifySelectedAllPermissionsByModule,
    handleSelectAllChange,
  };
};
