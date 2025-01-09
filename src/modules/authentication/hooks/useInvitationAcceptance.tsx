import { useCallback, useEffect, useRef } from 'react';
import { useIsClientSide } from '@dfl/hook-utils';
import { useApiRequestReducer, useAuth } from '@dfl/react-security';
import { InvitationService } from 'modules/authentication/services';
import { useNavigate } from 'react-router';

const useInvitationAcceptanceAPi = () => {
  const { startRequest, errorRequest, completeRequest, state } = useApiRequestReducer({
    isLoading: true,
  });
  const { setAuth } = useAuth();
  const mutate = useCallback(async (key: string | { key: string, [prop: string]: any }) => {
    startRequest();
    try {
      const data = await InvitationService.verify(key);
      completeRequest(data);
      setAuth(data);
    } catch (e) {
      errorRequest(e);
    }
  }, [completeRequest, errorRequest, setAuth, startRequest]);

  return {
    ...state,
    mutate,
  };
};

type Executed = Record<string, boolean>

const useInvitationAcceptance = (key: string | { key: string, [prop: string]: any }) => {
  const isClientSide = useIsClientSide();
  const navigate = useNavigate();
  const { mutate, isLoading, isError, error, data, isSuccess } = useInvitationAcceptanceAPi();
  const executed = useRef<Executed>({});

  useEffect(() => {
    const verifyKey = typeof key === 'string' ? key : key?.key;

    if (isClientSide && !executed.current[verifyKey]) {
      executed.current[verifyKey] = true;
      mutate(key).then();
      navigate('/');
    } else {
      console.log('NOT ACCEPTANCE INTENT');
    }
  }, [key, isClientSide, mutate, navigate]);

  return {
    mutate,
    isLoading,
    isError,
    isSuccess,
    error,
    data,
  };
};

export default useInvitationAcceptance;
