import { memo } from 'react';
import { useParams } from 'react-router-dom';
import RoleProviderDetailsContainer from 'modules/security/roles/containers/RoleProviderDetailsContainer';
import { RoleProviderDetailProvider } from 'modules/security/roles/contexts/RoleProviderDetailContext';

const RoleProviderDetails = () => {
  const { id } = useParams();

  return (
        <RoleProviderDetailProvider roleId={id as string}>
            <RoleProviderDetailsContainer />
        </RoleProviderDetailProvider>
  );
};

export default memo(RoleProviderDetails);
