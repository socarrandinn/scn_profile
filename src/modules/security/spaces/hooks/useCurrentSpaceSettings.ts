import { useQuery } from '@tanstack/react-query';
import { SpaceSettingService } from '../services';
import { useUser } from '@dfl/react-security';

export const SPACES_SETTINGS_KEY = 'spaces-settings';

export const useCurrentSettingsSpace = () => {
  const { user } = useUser();

  const { data: spaceSettings, ...rest } = useQuery(
    [SPACES_SETTINGS_KEY],
    async () => {
      const { data } = await SpaceSettingService.search();
      return data;
    },
    { enabled: !!user },
  );

  return {
    spaceSettings,
    ...rest,
  };
};
