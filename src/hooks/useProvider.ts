import { useUser } from '@dfl/react-security';

export const useProvider = () => {
  const { user } = useUser();

  return { type: user.typeProvider, providerId: user.provider };
};
