import { memo } from 'react';
import { ERRORS, LOGIN_ERRORS } from 'modules/authentication/constants';
import { HandlerError } from '@dfl/mui-react-common';
import SpaceSelect from 'modules/authentication/components/MultiSpaceErrorHandler/SpaceSelect';

type MultiSpaceErrorHandlerProps = {
  error?: any;
  setValue: (field: any, value: any) => void;
};

const MultiSpaceErrorHandler = ({ error, setValue }: MultiSpaceErrorHandlerProps) => {
  if (!error) return <></>;
  if (error?.reference === ERRORS.UNAUTHORIZED_MULTI_SPACE) {
    return <SpaceSelect spaces={error.data} setValue={setValue} error={error} />;
  }

  return <HandlerError error={error} errors={LOGIN_ERRORS} />;
};

export default memo(MultiSpaceErrorHandler);
