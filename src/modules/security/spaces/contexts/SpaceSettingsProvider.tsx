import { ReactNode, useContext, useMemo } from 'react';
import { SpaceSettingsContext } from 'modules/security/spaces/contexts/SpaceSettingsContext';
import { useCurrentSettingsSpace } from 'modules/security/spaces/hooks/useCurrentSpaceSettings';
import reduce from 'lodash/reduce';
import { ISpaceSetting } from 'modules/security/spaces/interfaces';

type SpaceSettingsProviderProps = {
  children: ReactNode;
};

const SpaceSettingsProvider = ({ children }: SpaceSettingsProviderProps) => {
  const { isLoading: loading, spaceSettings } = useCurrentSettingsSpace();

  const settings = useMemo(
    () =>
      reduce(
        spaceSettings,
        (acc, { typo, data }: ISpaceSetting) => ({
          ...acc,
          [typo as string]: data,
        }),
        {},
      ),
    [spaceSettings],
  );

  return (
    <SpaceSettingsContext.Provider
      value={{
        settings,
        loading,
      }}
    >
      {children}
    </SpaceSettingsContext.Provider>
  );
};

export const useSpaceSettings = () => {
  const { settings, loading } = useContext(SpaceSettingsContext);
  return { settings, loading };
};

export default SpaceSettingsProvider;
