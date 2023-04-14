import { memo } from 'react';
import { useParams } from 'react-router';
import VerifyContainer from 'modules/authentication/container/VerifyContainer';

const Verify = () => {
  const params = useParams();

  return <VerifyContainer admin={true} verifyKey={params.key as string}></VerifyContainer>;
};

export default memo(Verify);
