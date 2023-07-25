import { memo } from 'react';
import { useParams } from 'react-router-dom';
import RoleProviderDetailsContainer from '../containers/RoleProviderDetailsContainer';
import { RoleProviderDetailProvider } from '../contexts/RoleProviderDetailContext';

const RoleProviderDetails = () => {
  const { id } = useParams();

  return (
    <RoleProviderDetailProvider roleId={id as string} type={''}>
      <RoleProviderDetailsContainer />
    </RoleProviderDetailProvider>
  );
};

export default memo(RoleProviderDetails);
