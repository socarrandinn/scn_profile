import { ChangeEvent, useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

interface UsePermissionModuleProps {
  permissionsOptions: string[];
  setStateChanged?: (stateChanged: boolean) => void;
  setPermissionsModule: React.Dispatch<React.SetStateAction<Record<string, string[]>>>;
  permissionsModule: Record<string, string[]>;
  moduleName: string;
}

export const usePermissionModule = ({
  permissionsOptions,
  setStateChanged,
  setPermissionsModule,
  permissionsModule,
  moduleName,
}: UsePermissionModuleProps) => {
  const { t } = useTranslation('role');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handlePermissionChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setStateChanged && setStateChanged(true);
      const { name, checked } = event.target;

      setPermissionsModule((prevPermissions) => {
        const modulePermissions = prevPermissions[moduleName] || [];
        if (checked) {
          return { ...prevPermissions, [moduleName]: [...modulePermissions, name] };
        } else {
          return {
            ...prevPermissions,
            [moduleName]: modulePermissions.filter((permission) => permission !== name),
          };
        }
      });
    },
    [setPermissionsModule, setStateChanged, moduleName],
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

  const handleSelectAllChange = useCallback(() => {
    setStateChanged && setStateChanged(true);
    setPermissionsModule((prevPermissions) => {
      if ((prevPermissions[moduleName] || []).length === filteredPermissionsOptions.length) {
        return { ...prevPermissions, [moduleName]: [] };
      } else {
        return { ...prevPermissions, [moduleName]: filteredPermissionsOptions };
      }
    });
  }, [filteredPermissionsOptions, moduleName, setPermissionsModule, setStateChanged]);

  return {
    searchTerm,
    filteredPermissionsOptions,
    handlePermissionChange,
    handleSearchChange,
    handleSelectAllChange,
  };
};
