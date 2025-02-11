import { memo } from 'react';
import { useParams } from 'react-router-dom';
import RoleProviderDetailsContainer from 'modules/security/roles/containers/RoleProviderDetailsContainer';
import { RoleDetailProvider } from '../contexts';
import { SPACE_TYPE } from 'modules/security/users/constants/space-types.constants';

const RoleProviderDetails = () => {
  const { id } = useParams();

  return (
    <RoleDetailProvider roleId={id as string} type={SPACE_TYPE.PROVIDER}>
      <RoleProviderDetailsContainer />
    </RoleDetailProvider>
  );
};

export default memo(RoleProviderDetails);
