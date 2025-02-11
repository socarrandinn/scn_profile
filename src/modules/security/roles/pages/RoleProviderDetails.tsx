import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { RoleDetailProvider } from '../contexts';
import { SPACE_TYPE } from 'modules/security/users/constants/space-types.constants';
import RoleDetailsContainer from '../containers/RoleDetailsContainer';

const RoleProviderDetails = () => {
  const { id } = useParams();

  return (
    <RoleDetailProvider roleId={id as string} type={SPACE_TYPE.PROVIDER}>
      <RoleDetailsContainer type={SPACE_TYPE.PROVIDER} />
    </RoleDetailProvider>
  );
};

export default memo(RoleProviderDetails);
