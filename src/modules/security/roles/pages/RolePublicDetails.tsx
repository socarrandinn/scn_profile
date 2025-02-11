import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { RoleDetailProvider } from 'modules/security/roles/contexts';
import RoleDetailsContainer from 'modules/security/roles/containers/RoleDetailsContainer';
import { SPACE_TYPE } from 'modules/security/users/constants/space-types.constants';

const RoleDetails = () => {
  const { id } = useParams();

  return (
    <RoleDetailProvider roleId={id as string} type={SPACE_TYPE.PUBLIC}>
      <RoleDetailsContainer type={SPACE_TYPE.PUBLIC} />
    </RoleDetailProvider>
  );
};

export default memo(RoleDetails);
