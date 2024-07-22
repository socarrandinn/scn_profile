import { ChangeEvent, useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

interface UsePermissionModuleProps {
  permissionsOptions: string[];
  setPermissions: React.Dispatch<React.SetStateAction<string[]>>;
  setStateChanged?: (stateChanged: boolean) => void;
  permissions: string[];
  setPermissionsModule: React.Dispatch<React.SetStateAction<string[]>>;
  permissionsModule: string[];
}

export const usePermissionModule = ({
  permissionsOptions,
  setPermissions,
  setStateChanged,
  permissions,
  setPermissionsModule,
  permissionsModule,
}: UsePermissionModuleProps) => {
  const { t } = useTranslation('role');

  const [searchTerm, setSearchTerm] = useState<string>('');
  const handlePermissionChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setStateChanged && setStateChanged(true);
      const { name, checked } = event.target;

      setPermissionsModule((prevPermissions: string[]) => {
        if (checked) {
          return [...prevPermissions, name];
        } else {
          return prevPermissions.filter((permission) => permission !== name);
        }
      });
    },
    [setPermissionsModule, setStateChanged],
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
    if (filteredPermissionsOptions.length === permissionsModule.length) {
      setPermissionsModule([]);
    } else {
      setPermissionsModule(filteredPermissionsOptions);
    }
  }, [filteredPermissionsOptions, permissionsModule, setPermissions]);

  return {
    searchTerm,
    filteredPermissionsOptions,
    handlePermissionChange,
    handleSearchChange,
    handleSelectAllChange,
  };
};
